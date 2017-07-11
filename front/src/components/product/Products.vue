<template>
    <div class="row">
        <comProduct v-for="product in products" @deleteProduct="deleteProduct(product)" :product="product" key="product.id"></comProduct>
    </div>
</template>
<script>
import comProduct from './Product'
export default {
    data() {
        return {
            products: []
        }
    },
    created() {
        this.$http.get('api/products').
            then(responese => {
                this.products = responese.body.data
                //console.log(responese.body)
            })
    },
    components: {
        comProduct
    },
    methods: {
        deleteProduct(product) {
            //console.log(this.products)
            this.$http.delete('api/products/' + product.id)
                .then(response => {
                    console.log(response)
                    let index = this.products.indexOf(product)
                    this.products.splice(index, 1)
                })
        }
    }

}
</script>
<style>

</style>
