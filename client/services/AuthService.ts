import $api from '@/http'

export class AuthService {

    static async login(param: object) {
        return $api.post('/login', param)
    }

    static async logout() {
        return $api.post('/logout')
    }
}



