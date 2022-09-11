const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log("This is 1st middleware!!!!!!");
    res.send('<h1>This is all our users info!!!!!!</h1>');
});

app.use('/',(req, res, next) => {
    console.log("This is 2nd middleware!!!!!!");
    res.send('<h1>Hello from Express!!!!!!!!!</h1>');
});

app.listen(3000);