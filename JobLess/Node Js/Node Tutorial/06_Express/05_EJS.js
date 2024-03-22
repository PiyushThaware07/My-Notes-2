// npm i ejs

const express = require('express');
const app = express();

// Setting Views Engine
app.set('view engine', 'ejs');

// creating individual views of each page
app.get('', (_, response) => {
    const params = {
        first_name: "Piyush",
        last_name: "Thaware",
        email: "Piyush@gmail.com",
        skills : ['Python','Django','React','Javascript']
    }
    response.render('Signin', { obj: params });
})
app.listen(1000);