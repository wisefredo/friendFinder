const express = require("express");

var friends = require('../data/girlFriend.js');

var router = express.Router();


router.get('/api/friends', (req, res) => {
    return res.send(friends.girlFriends());
});


router.post('/api/friends', (req, res) => {

    var newFriend = req.body;
    var scores = newFriend['scores[]'];
    newFriend.scores = scores;
    delete newFriend['scores[]'];
    console.log('fixed friend', newFriend);

    return res.send(friends.findMatch(newFriend));
});


module.exports = router;