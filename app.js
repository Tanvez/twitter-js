const express = require('express');
const app = express();

app.listen(3000, () => console.log('hi'));

app.get('/', (req, res) => res.send('<h1>WORKING!!!!!</h1>'));

app.get('/is-anybody-there', (req, res) => res.send('<h1>?????</h1>'));

app.use('/modernism', (req, res, next) => console.log('Post malone'));