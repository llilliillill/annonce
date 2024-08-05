const jwt = require('jsonwebtoken')
const TokenModel = require('../models/token-model')

class TokenService {

    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30m'
        })

        const refrashToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '30d'
        })

        return {
            accessToken,
            refrashToken
        }
    }

    async validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        } catch (e) {
            return null
        }
    }

    async validateRefrashToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
        } catch (e) {
            return null
        }
    }

    async saveToken(user_id, refrashToken) {
        const tokenData = await TokenModel.checkExistsToken(user_id)

        if (tokenData) {
            await TokenModel.updateToken(user_id, refrashToken)
        } else {
            await TokenModel.createToken(user_id, refrashToken)
        }

        return {
            user_id,
            refrashToken
        }
    }

    async removeToken(refrashToken) {
        return await TokenModel.deleteToken(refrashToken)
    }

    async findToken(refrashToken) {
        return await TokenModel.findToken(refrashToken)
    }

}

module.exports = new TokenService()