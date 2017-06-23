<template>
    <div class="row">
        <comProduct v-for="product in products" :product="product" key="product.id"></comProduct>
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
                this.products = responese.body
                //console.log(responese.body)
            })
    },
    components: {
        comProduct
    }
}
</script>
<style>

</style>
