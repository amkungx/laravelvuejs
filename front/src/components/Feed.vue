<template>
    <div>
        <ul>
            <li v-for="product in products">
                {{product.name}}
            </li>
        </ul>
    </div>
</template>
<script>
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
            })
    }
}
</script>
