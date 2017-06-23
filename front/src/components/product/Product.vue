<template>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card">
            <img class="card-img-top" src="https://placeholdit.imgix.net/~text?w=640&h=240&txt=1" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">{{ product.name }}</h4>
                <p class="card-text">{{ product.description | truncate(50) }}</p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['product']
}
</script>
<style>

</style>
