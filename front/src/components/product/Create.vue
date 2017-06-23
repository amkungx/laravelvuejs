<template>
    <div class="row">
        <div class="col-md-6 mx-auto">
            <h5 class="text-right">Create product</h5>
            <div class="form-control clearfix">
                <div class="form-group">
                    <label>Name</label>
                    <input v-model="product.name" type="text" class="form-control" placeholder="Product name">
                    <small id="nameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input v-model="product.price" type="number" class="form-control" placeholder="Price">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" v-model="product.description"></textarea>
                </div>
                <button class="btn btn-primary float-right" :disabled="!product.name || !product.price" @click="create">Submit</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: {
                name: null,
                price: null,
                description: null
            }
        }
    },
    methods: {
        create() {
            this.$http.post('api/products', this.product)
            .then(response => {
                this.$router.push('/products')
            })
        }
    }
}
</script>

