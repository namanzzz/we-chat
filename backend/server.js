// const express = require('express');
// const dotenv = require('dotenv');
// const app = express();
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express(); 
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(express.json()) // parse incoming reqests with json payloads(from req.body)


app.use('/api/auth', authRoutes)

// app.get('/',(req,res)=>{
//     res.send('Hellooo Brother!');
// })




app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server listening to port ${PORT}`);
});
