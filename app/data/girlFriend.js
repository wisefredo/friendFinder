function GirlFriend() {

    var girlFriends = [{
            "name": "Tifany",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [5, 1, 4, 4, 3, 1, 2, 4, 5, 3]
        },
        {
            "name": "Emily",
            "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
            "scores": [3, 4, 2, 5, 2, 2, 1, 4, 3, 5]
        },
        {
            "name": "Viktoria",
            "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
            "scores": [4, 5, 2, 3, 5, 5, 1, 4, 3, 2]
        }
    ];
    this.girlFriends = function() {
        return girlFriends;
    }
    this.addGirlFriend = function(name, photo, scores) {
        var girl = {
            'name': name,
            'photo': photo,
            'scores': scores

        }
        girlFriends.push(girl);
    }
    this.findMatch = function(current) {
        //best mutch object for storing the best match friend
        var match = {
            'name': "",
            'photo': "",
            'score': 60
        };

        //current user  total score
        var currScore = current.scores.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        girlFriends.forEach(function(friend) {
            //each friend total score
            var friendScore = friend.scores.reduce((a, b) => a + b, 0);
            var totalDifference = currScore - friendScore;
            //if total difference is negative it turn it to positive number
            if (totalDifference < 0) {
                totalDifference *= (-1);
            }
            if (totalDifference < match.score) {
                match.name = friend.name;
                match.photo = friend.photo;
                match.score = totalDifference;
            }
        });
        girlFriends.push(current);
        return match;
    };

}

var girl = new GirlFriend();
console.log(girl.girlFriends());
console.log('*******************************************************')
console.log(girl.addGirlFriend("Alfredo", "google.com", [4, 5, 2, 3, 5, 5, 1, 4, 3, 2]));

console.log(girl.girlFriends());
module.exports = girl;