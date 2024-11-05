require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('hello World')
})

app.get('/login',(req, res)=>{
    res.send('loginff')
})

app.listen(process.env.PORT, ()=> {
    console.log(`insode app on port ${process.env.PORT}`)
})