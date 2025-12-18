import express from "express";
import mongoose from "mangoose";
const PORT = 3000;
const app = express();
mongoose 
.connect(
    "mongodb+srv://arpitasakshi9890:<db_password>@cluster0.gxtcbbn.mongodb.net/"
)
.then(()=>{
    console.log("connnect to db");
    
})
.catch((err)=>{
    console.log("err");
    
});
const userSchema = new mongoose.userSchema({
    username: String,
    password: String,
});
// const User = mongoose.mode("User", userSchema)
