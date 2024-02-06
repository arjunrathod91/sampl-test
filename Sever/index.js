const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Model = require('./Model/user')
const dotenv = require('dotenv').config();
const app = express()
app.use(express.json())
app.use(cors({
    origin: ['https://sample-testing-3qhjwkkxr-arjun-rathods-projects.vercel.app']
  }))

mongoose.connect("mongodb+srv://arjunrathod91:arjunrathod91@helpyourswebsite.a13bvd6.mongodb.net/sample?retryWrites=true&w=majority")

app.post('/newUser',(req,res)=>{
    Model.create(req.body)
    .then((data)=>{
        console.log(data)
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)})
})

app.get('/',(req,res)=>{
    const sample = "<h1>Hello There</h1>"
    res.send(sample)
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`)
})