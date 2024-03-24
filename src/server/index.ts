import session from 'cookie-session'
import express from 'express'
import { api } from './api'
import { auth } from './auth'

const app = express()

app.use(session({
    secret: 'secret'
}))

app.use(auth)
app.use(api)

app.get("/api/hi", (req,res)=> res.send("Hello World!"))
app.listen(3002, ()=> console.log('Started:)'))