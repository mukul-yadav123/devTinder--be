const express = require('express');
const {connectDb}= require('./config/database')
const User = require('./models/user')
const app = express();

app.post('/signup', async(req,res) => {
    const userObj = {
        firstName: 'Mukul',
        lastName: 'Yadav',
        emailId: 'mukuly2002@gmail.com',
        age: 22,
        password: '12345678'
    }

    const user = new User(userObj);
    try{
        await user.save()
        res.send('User added successfully')
    }
    catch(err){
        res.status(400).send('Error saving the user' + err.message)
    }

})

connectDb()
    .then(() => {
        console.log('Database connected')
        app.listen(3000,() => {
            console.log('server is listening on port 3000')
        })
    })
    .catch((err) => console.error('Database cannot be connected'))