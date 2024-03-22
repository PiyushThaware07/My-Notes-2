const express = require('express');
const app = express();
// Getting Current Path
const path = require('path');
const publicPath = path.join(__dirname, 'public');
console.log(publicPath);

app.use(express.static(publicPath));  // load static files from public folder
app.listen(1000);

/*
Chrome : http://localhost:1000 
         http://localhost:1000/index.html
         http://localhost:1000/about.html
*/