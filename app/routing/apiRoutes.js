// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  }); //closing for app.get

  for (var i = 0; i < friendsData.length; i++) {
    console.log([i] + " friendsData: " + "\nfriend's name: " + friendsData[i].name + "\nfriend's photo: " + friendsData[i].photo + "\nfriend's scores: " + friendsData[i].scores)
  }

  app.post('/api/friends', function (req, res) {

    var newFriendData = req.body;

    var differencesSum = 0;

    var currentMinimum = 1;

    for (var i = 0; i < friendsData.length; i++) {

      for (var j = 0; j < newFriendData.scores[j].length; j++) {

        var singleDifference = Math.abs(parseInt(newFriendData.scores[j]) - parseInt(friendsData[i].scores[j]));

        differencesSum += singleDifference;

      }//closing for for loop [j]

      if (differencesSum < currentMinimum) {

        var foundFriend = friendsData[i];

        currentMinimum = differencesSum;

      }//closing for if statement

    };//closing for for loop [i]

    res.json(foundFriend);

    friendsData.push(newFriendData);

  }); //closing for app.post

}; //closing for module.exports and function(app)
