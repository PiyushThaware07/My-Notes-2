const express = require('express');
const app = express();

// Getting Current Path
const path = require('path');
const publicPath = path.join(__dirname,'public');

// Handle Routing
app.get('',(request,response)=>{
    console.log(request.query);
    console.log(request.query.fname);
    console.log(request.query.lname);
    response.sendFile(`${publicPath}/index.html`);
})

app.listen(1000);

/*
Chrome : http://localhost:1000/?fname=Piyush&lname=thaware
Output  : { fname: 'Piyush', lname: 'thaware' }
Piyush
thaware
*/