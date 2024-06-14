// const express = require('express');
// const dotenv = require('dotenv');
// const app = express();
import express from 'express'
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send('Hellooo Brother!');
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server listening to port ${PORT}`);
});
