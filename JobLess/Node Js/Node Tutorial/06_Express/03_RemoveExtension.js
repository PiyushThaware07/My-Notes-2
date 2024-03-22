const express = require('express');
const app = express();

// Getting Current Path
const path = require('path');
const publicPath = path.join(__dirname,'public');

// Handle Routing
app.get('',(request,response)=>{
    response.sendFile(`${publicPath}/index.html`);
})
app.get('/about',(request,response)=>{
    response.sendFile(`${publicPath}/about.html`);
})

app.get('/*',(request,response)=>{
    response.sendFile(`${publicPath}/404.html`);
})

app.listen(1000);

/*
Chrome : http://localhost:1000/
         http://localhost:1000/about
*/