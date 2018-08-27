const express = require('express');
const config = require('./config');
const app = express();

const fbAds = require('./facebook/ads');
const igAds = require('./instagram/ads');
const stories = require('./instagram/stories');

app.use('/facebook/ads', fbAds);
app.use('/instagram/ads', igAds);
app.use('/instagram/stories', stories);

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

