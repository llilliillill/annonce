const UserModel = require('../models/user-model')
const TokenService = require('../service/token-service')
const bcrypt = require('bcrypt')
const ApiError = require('../exeptions/api-error')

class UserService {

    async login(username, password) {

        let user = await UserModel.checkExistsUsername(username)
        if(!user) {
            throw ApiError.BadRequest('Пользователь с таким username не найден')
        }

        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        user = await UserModel.getUserByUsername(username)
        const userObj = {
            id: user.id, 
            username: user.username,
            phone: user.phone,
            avatar: user.avatar,
            description: user.description,
            documents: user.documents
        }

        const tokens = TokenService.generateTokens({ ...userObj })
        await TokenService.saveToken(userObj.id, tokens.refrashToken)

        return { ...tokens, user: userObj }
    }

    async logout(refrashToken) {
        return await TokenService.removeToken(refrashToken)
    }

    async refresh(refrashToken) {
        if (!refrashToken) {
            ApiError.UnauthorizedError()
        }

        const userData = await TokenService.validateRefrashToken(refrashToken)
        const tokenFromDb = await TokenService.findToken(refrashToken)

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }

        const user = await UserModel.getUserById(userData.id)
        const userObj = {
            id: user.id, 
            username: user.username,
            phone: user.phone,
            avatar: user.avatar,
            description: user.description,
            documents: user.documents
        }

        const tokens = TokenService.generateTokens({ ...userObj })
        await TokenService.saveToken(userObj.id, tokens.refrashToken)

        return { ...tokens, user: userObj }
    }

}

module.exports = new UserService()