const express = require('express');
var path = require('path');
const app = express();

const port = 8000/'cwf_login2.html';
const responsedelay = 50;
app.get('/', function(req, res)
{
    res.sendFile('cwf_login2.html',{root: path.join(__dirname,)});
});
app.listen(port, function()
{
    console.log(`Server is started on port: ${port}`);
});