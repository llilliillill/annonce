const Database = require('better-sqlite3')

class UserModel {

    db = new Database('./test.db')

    async checkExistsUsername(username) {
        return this.db.prepare(`
            SELECT * FROM users WHERE username = ?
        `).get(username)
    }

    async getUserById(user_id) {
        return this.db.prepare(`
            SELECT * FROM users WHERE id = ?
        `).get(user_id)
    }

    async getUserByUsername(username) {
        return this.db.prepare(`
            SELECT * FROM users WHERE username = ?
        `).get(username)
    }
    
}

module.exports = new UserModel()