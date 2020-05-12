var friendsArray = require("./../data/friends");
module.exports =function(app) {
// display json of all possible friends
app.get("/friends", function(request, response) {
  response.json(friendsArray);
});


// add POST code to handle survey results

app.post("/friends", function(request, response){
  friendsArray.push(request.body);
  // store the current submission in an array 
  var userData = friendsArray[friendsArray.length-1];
  var userScore = userData.score;
  console.log(userScore);
  // How to calculate the match based on user submissions: 
  // 1. grab each user in the list and get the scores array
for (var i = 0; i<friendsArray.length ; i++) {
var savedScores = friendsArray[i].scores;
console.log(savedScores);
//   for (var j = 0; j<savedScores.length; j++) {
//     var difference = Math.abs(newSubmission[j] - savedScores[j]);
//     console.log("Difference in values" + difference);
    

}

// }
  // 2. get the user's score and store in an array
  // 3. get the difference between each number for the two users and store in an array 
  // 4. if anything is a negative, convert to positive
  // 5. add up the numbers and store in an array
  // 6. travers the array and pick which position has the lowest score
  // 7. pull the best match for the user in that position

 
  response.json(friendsArray);
})
} 