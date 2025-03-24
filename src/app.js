const express = require('express');
// import {express} from 'express'

const app = express();


app.use("/test",(req,res) => {
res.send('Hello WOrld from 3000')
})


app.listen(3000,() => {
    console.log('server is listening on port 3000')
})