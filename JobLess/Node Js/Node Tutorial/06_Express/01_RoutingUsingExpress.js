const express = require('express');
// console.log(express); 
const app = express();

// 1. Sending String as a data
app.get('',(request,response)=>{
    response.send("Hello , This is Home Page");  
})


// 2. Sending an object as a data
app.get('/about',(request,response)=>{
    const params = {
        fname : "Piyush",
        lname : "Thaware",
        email : "Piyush@gmail.com"
    }
    response.send(params);
})
const port_no = 2000;
app.listen(port_no);
