function Friends() {

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


    var friends = [{
            "name": "Ahmed",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [5, 1, 4, 4, 3, 1, 2, 4, 5, 3]
        },
        {
            "name": "Jacob Deming",
            "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
            "scores": [3, 4, 2, 5, 2, 2, 1, 4, 3, 5]
        },
        {
            "name": "Jeremiah Scanlon",
            "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
            "scores": [4, 5, 2, 3, 5, 5, 1, 4, 3, 2]
        }
    ];


    this.getFriends = function() {
        return friends;
    };

    this.findMatch = function(current) {

        var match = {
            'name': "",
            'photo': "",
            'score': 60
        };

        //current user  total score
        var currScore = current.scores.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        friends.forEach(function(friend) {
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
        friends.push(current);
        return match;
    };
}


function getName() {

}

function Friend(name, dob) {
    var ssn = '111111111';
    this.name = name;
    this.dob = dob;
    this.getName = function() {
        return name;
    };
    this.createStr = function() {
        return name + dob;
    };
}

var alfredo = Friend("Alf", "12/12/12");
var tika = Friend("Tika", "12/12/12");


console.log(alfredo.getName());
console.log(alfredo.ssn);
console.log(alfredo.name);
console.log(tika.getName());


//creating friends object for working with it
var myFriends = new Friends();

//exporting friends object
module.exports = myFriends;