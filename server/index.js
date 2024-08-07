require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const errorMiddlewares = require('./middlewares/error-middlewares')

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddlewares)

const start = async () => {
    try {
        app.listen(PORT, () => { 
            console.log(`Server started on PORT = ${ PORT }`) 
        })
    } catch(e) {
        console.log(e)
    }
}

start()
