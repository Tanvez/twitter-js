'use strict';
const express = require('express');
const router = express.Router();
//router.use(express.static('public'))

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank'); // has add,list, find methods

router.get('/', function (req, res, next) {
    var allTweets = tweetBank.list(); // used here
    res.render('index', {
        title: 'Twitter.js',
        tweets: allTweets,
        showForm: true
    });
});

router.get('/users/:username', function (req, res, next) {

    var tweetsForName = tweetBank.find({
        name: req.params.username // name: userName, showForm: true, user
    }); // needs key and string of name
    res.render('index', {
        title: 'Twitter.js',
        tweets: tweetsForName,
        showForm: true,
        username: req.params.username
        //
    });
});
router.get('/tweets/:id', function (req, res, next) {
    var tweetsWithId = tweetBank.find({
        id: Number(req.params.id)
    });
    res.render('index', {
        title: 'Twitter.js',
        tweets: tweetsWithId
    });
});

router.post('/tweets', function (req, res, next) {

    tweetBank.add(req.body.name, req.body.text); // where are the tweets? 
    res.redirect('/'); //problem - html forms submit browser will reload the page - solution use res.redirect
});


module.exports = router;

// req.method
// req.path
//res.on('finish', function(){})