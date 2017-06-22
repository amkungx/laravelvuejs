<template>
    <div>
        <div class="col-md-6 mx-auto">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button @click="test" class="btn btn-primary">test</button>
            <button @click="login" class="btn btn-primary">Submit</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: 'jaylen61@example.org',
            password: 'secret'
        }
    },
    methods: {
        login() {
            var data = {
                client_id: 2,
                client_secret: 'ROT18QFZf39JLdRhmUBfDsZQPY41ClyeHu4W3FKr',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }
            //console.log(data)
            this.$http.post("http://localhost:8000/oauth/token", data).
                then(function (response) {
                    this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                    this.$router.push('/feed')
                })
        },
        test(){
            this.$http.get("http://localhost:8000/api/test").
            then(response=>{
                console.log(response);
            })
        }
    }
}
</script>
<style>

</style>
