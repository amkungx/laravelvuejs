export default function (Vue) {
    let authenticatedUser = {}
    Vue.auth = {
        setToken(token, expiridation) {
            localStorage.setItem('token', token)
            localStorage.setItem('expiridation', expiridation)
        },
        getToken() {
            var token = localStorage.getItem('token')
            var expiridation = localStorage.getItem('expiridation')
            if (!token || !expiridation)
                return null
            if (Date.now() > parseInt(expiridation)) {
                this.destroyToken()
                return null
            } else {
                return token
            }
        },
        destroyToken() {
            localStorage.removeItem('token')
            localStorage.removeItem('expiridation')
        },
        isAuthenticated() {
            if (this.getToken())
                return true
            else
                return false
        },
        setAuthenticatedUser(data) {
            authenticatedUser = data
        },
        getAuthenticatedUser() {
            return authenticatedUser
        }
    }

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get() {
                return Vue.auth
            }
        }
    })
}