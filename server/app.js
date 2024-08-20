const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/userinfo')
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/userinformation').then((e =>{
    console.log("mongodb connected");
}))
    

app.post("/login" , async(req , res)=>{
    const {email , password} = req.body;
    await userModel.findOne({email:email}).then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }
        }
        else {
            res.json("record doesn't exist")
        }
    })
    
})


app.post('/signup' , async (req , res)=>{
  await userModel.create(req.body).then(users =>res.json(users)).catch(err => res.json(err))

})


app.listen(3000 , ()=>{
    console.log("server is running on port 3000");
})