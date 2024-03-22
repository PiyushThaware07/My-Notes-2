const express = require('express');
const app = express();

// Setting Views Engine
app.set('view engine', 'ejs');

// creating individual views of each page
app.get('', (_, response) => {
    response.render('Signup');
})
app.listen(1000);