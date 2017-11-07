const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
    noCache: true
}); // point nunjucks to the proper directory for templates
app.use(express.static(__dirname + '/public'));
const routes = require('./routes');
app.use('/', routes);

app.listen(3030, () => console.log('hi'));

// app.get('/', (req, res) => res.render('index.html', locals));

// app.get('/is-anybody-there', (req, res) => res.send('<h1>?????</h1>'));

// app.use('/modernism', (req, res, next) => next());

// var locals = {
//     title: 'An Example',
//     people: [{
//             name: 'Gandalf'
//         },
//         {
//             name: 'Frodo'
//         },
//         {
//             name: 'Hermione'
//         }
//     ]
// };
// nunjucks.configure('views', {
//     noCache: true
// });
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

//interpolate ex: ${variable}
//nunjucks help create html via index.html