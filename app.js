const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
//middleware
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
    noCache: true
}); // point nunjucks to the proper directory for templates


app.use(bodyParser.urlencoded({
    extended: true
})); // this is how you call it? // for html forms submit
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(3030, () => console.log('hi'));
// console.log(bodyParser.urlencoded({
//     extended: true
// }));