var friendsArray = require("./../data/friends");
module.exports = function (app) {
  // display json of all possible friends
  app.get("/friends", function (request, response) {
    response.json(friendsArray);
  });


  // add POST code to handle survey results

  app.post("/friends", function (request, response) {
    friendsArray.push(request.body);
    // store the current submission in an array by taking the last value in the array 
    var userData = friendsArray[friendsArray.length - 1];
    // grab the actual scores from the userData array
    var userScore = userData.score;
    console.log(userScore);
    differenceArray = [];

    // How to calculate the match based on user submissions: 
    // 1. grab each user in the list (except last) and get the scores array 
    for (var i = 0; i < friendsArray.length - 1; i++) {
      var savedScores = friendsArray[i].scores;
      console.log("The Saved scores for users are");
      console.log(savedScores);
      // for each value in the array, calculate the difference and store it in a totalDiff variable
      var totalDiff = 0;
      for (var j = 0; j < savedScores.length; j++) {
        var difference = Math.abs(userScore[j] - savedScores[j]);
        totalDiff = totalDiff + difference;
      }
      // store the final value of the totalDiff in an array
      console.log("the sum of the TOTALdifference is ---");
      console.log(totalDiff);
      differenceArray.push(totalDiff);
    }
    console.log("The difference Array looks like this: ");
    console.log(differenceArray);

    //get minimum value within the array.
    var minValue = Math.min(differenceArray);
    console.log(minValue);
    // for the differenceArray, what position is the min value
    // for (var k = 0; k < differenceArray.length; k++) {
    //   if (minValue === differenceArray[k]) {
    //     console.log("Position is:");
    //     console.log([k]);
    //     console.log("The closest match is:");
    //     console.log(friendsArray[k]);
    //   }
 // }

});
} 