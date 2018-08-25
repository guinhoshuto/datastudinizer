const express = require('express');
const config = require('./config');
const app = express();

app.get('/', function(req, res){
    res.status(200).json({
        message: 'oi'
    })
})



app.listen(3000, function(){
    console.log('oioi');
    console.log(config.token);
})
module.exports = app;

