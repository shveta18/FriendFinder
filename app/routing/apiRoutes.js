var friendsArray = require("./../data/friends");
module.exports = function (app) {
  // display json of all possible friends
  app.get("/friends", function (request, response) {
    response.json(friendsArray);
  });


  // add POST code to handle survey results
  app.post("/friends", function (request, response) {
    // push the request from client into the friends array
    friendsArray.push(request.body);
    // Store the latest data being input by the user into an array called userData and grab the actual scores from this array
    var userData = friendsArray[friendsArray.length - 1];
    var userScore = userData.score;
    var differenceArray = [];
    var savedScores = [];

    // Calculate the friend match based on user submissions: 
    // 1. grab each user in the list (except last) and get the scores array 
    console.log("-------this is the friends array and scores------");
    for (var i = 0; i < friendsArray.length - 1; i++) {
      console.log(friendsArray[i]);
      console.log("The Saved scores for this friend is");
      console.log(savedScores);
      // for each element of the array, calculate the difference between userScore and savedScore. Add all values to get totalDiff
      var totalDiff = 0;
      for (var j = 0; j < savedScores.length; j++) {
        var difference = Math.abs(userScore[j] - savedScores[j]);
        totalDiff = parseInt(totalDiff + difference);
      }
      // store the final value of the totalDiff in an array for each friend
      differenceArray.push(totalDiff);
    }
    // for the differenceArray, what position is the min value
    for (var k = 0; k < differenceArray.length; k++) {
      val1 = differenceArray[k];
      val2 = differenceArray[k + 1];
      if (val1 < val2) {
        position = k;
        k = k + 1;
      }
      if (val2 < val1) {
        position = k + 1;
      }
      if (val1 === val2) {
        position = k;
        k = k + 1;
      }
    }
    console.log(position);
    response.json(friendsArray[position]);
  });
} 