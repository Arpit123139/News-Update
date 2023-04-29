const express=require('express')
const cors=require('cors');
const connectWithDb = require('./config/db');

const app=express();

app.use(express.json())
app.use(cors())
app.use(express());


connectWithDb()
app.listen(5000,()=>{
    console.log("Server is listenening on Port 5000")
})


const newsRoute=require('./router/newsRouter')
app.use('/',newsRoute)