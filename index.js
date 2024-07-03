const express = require("express");
const app=express();
const cors=require('cors');
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
app.use(cors())
app.use(express.json())

let user=[]
app.get('/users',function(req,res){
    res.json(user)
})
async function mongoConnect() {
    let client = mongoose.connect("mongodb+srv://amithcse21:amith2966@cluster.x2iecq7.mongodb.net/jyooo").then(()=>console.log("DB connected"));
    await client.connect();
    db = client.db('jyooo');
   ;
 }
 
app.get('/users', async function (req, res) {
    let output = await db.collection('users').find({}).toArray();
    res.json(output);
});

 
app.post('/Sign',function(req,res){
    console.log(req.body)
    user.push(req.body)
    res.json(user)

})
app.post('/login',function(req,res){
    console.log(req.body)
    for (i=0;i<user.length;i++){
        if(user[i].email==req.body.email){
            if(user[i].pass1==req.body.pass1){
                return res.json(user[i]);
            }
        }
    }
    return res.json("Email not found");
})
let s=50
app.get('/s',function(req,res){
    res.json(s)
})
app.listen(5001,function() {
    console.log('Server ready listening on port 5001')
})