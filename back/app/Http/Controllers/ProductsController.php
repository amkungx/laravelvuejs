<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        $per_page = $request->input('per_page', 15);
        $order = $request->input('sort', 'name|desc');
        $orderArr = explode('|', $order);
        $orderBy = $orderArr[0];
        $orderDirection = $orderArr[1];

        return Product::orderBy($orderBy, $orderDirection)->paginate($per_page);
        //return Product::all();
    }

    public function show($id)
    {
        return response()->json(Product::find($id));
    }

    public function store(Request $request)
    {
        $product = Product::create($request->all());
        return $product;
    }

    public function update(Request $request, $id)
    {  
        $product = Product::find($id);
        $product->update($request->all());
        return response()->json($product);
    }

    public function destroy($id)
    {
        try {
            Product::destroy($id);
            return response([], 204);
        } catch (\Exception $e) {
            return response(['Problem deleting product', 500]);
        }
    }

}
