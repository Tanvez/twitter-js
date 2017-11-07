const express = require('express');
const router = express.Router();
//router.use(express.static('public'))

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank'); // has add,list, find methods

router.get('/', function (req, res) {
    let tweets = tweetBank.list(); // used here
    res.render('index', {
        tweets: tweets,
        showForm: true
    });
});

router.get('/users/:name', function (req, res) {
    var userName = req.params.name; // set userName to name
    var tweetsForName = tweetBank.find({
        name: userName
    }); // needs key and string of name
    res.render('index', {
        title: 'Twitter.js',
        tweets: tweetsForName
    });
    router.get('/tweets/:id'),
        function (req, res) {
            var tweetsWithId = tweetBank.find({
                id: Number(req.params.id)
            });
            res.render('index', {
                title: 'Twitter.js',
                tweets: tweetsWithId
            });
        }

});
//express.static('/public');
// router.get('/stylesheets/style/style.css', function (req, res) {
//     res.sendFile('style.css', {
//         root: __dirname + '/../public/'
//     });

// });
// router.use('/stylesheets/style/style.css', express.static(__dirname, '/public/stylesheets'));

module.exports = router;

// req.method
// req.path
//res.on('finish', function(){})