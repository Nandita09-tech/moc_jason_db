const express= require('express');
require('dotenv').config();
const app =express();
const port= process.env.port || 3000;

// create views 
app.set('view engine','ejs');
app.set('views', './views');

// 
app.use(express.static('public'));


app. listen (port,()=>{
    console.log(`connected to server ${port}`);

});