<template>
    <div>
        <b-navbar toggleable type="inverse" variant="success">
    
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    
            <b-link class="navbar-brand" to="/">
                <span>LARAVELVUEJS</span>
            </b-link>
    
            <b-collapse is-nav id="nav_collapse">
    
                <b-nav is-nav-bar v-if="!$auth.getToken()">
                    <b-nav-item to="/login">Login</b-nav-item>
                    <b-nav-item to="/register">Register</b-nav-item>
                    <b-nav-item to="/products">Products</b-nav-item>
                </b-nav>
                <b-nav is-nav-bar v-if="$auth.getToken()">
                    <b-nav-item to="/products">Products</b-nav-item>
                    <b-nav-item to="/products/create">Create</b-nav-item>
                    <b-nav-item to="/logout">Logout</b-nav-item>
                </b-nav>
    
                <b-nav is-nav-bar class="ml-auto">
    
                    <!-- Navbar dropdowns -->
                    <b-nav-item right>End Days</b-nav-item>
                    <b-nav-item-dropdown right>
    
                        <!-- Using text slot -->
                        <template slot="text">
                            <span>Dropdown</span>
                        </template>
    
                        <b-dropdown-item>Option1</b-dropdown-item>
                        <b-dropdown-item>Option2</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item right>
                        <b style="color:white">Value: </b>
                    </b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isAuth: null
        }
    },
    created() {
        if(this.$auth.isAuthenticated()){
            this.isAuth = this.$auth.isAuthenticated()
            this.setAuthenticatedUser()
        }
    },
    methods: {
        setAuthenticatedUser() {
            this.$http.get('api/user')
                .then(response => {
                    this.$auth.setAuthenticatedUser(response.body)
                    console.log(this.$auth.getAuthenticatedUser())
                })
        }
    }
}
</script>
<style>

</style>
