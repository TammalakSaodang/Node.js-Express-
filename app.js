const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res)=>{

    res.send('Hello borntoDev,Co LTD');

})

app.listen(port,()=>{
    console.log("Litening on port " +port);
})