// const express = require('express');
// const dotenv = require('dotenv');
// const app = express();
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.get('/',(req,res)=>{
    res.send('Hellooo Brother!');
})

app.use('/api/auth',authRoutes)


app.listen(PORT, ()=>{
    console.log(`server listening to port ${PORT}`);
});
