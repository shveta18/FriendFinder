var friendsArray = require("./../data/friends");
module.exports =function(app) {
// display json of all possible friends
app.get("/friends", function(request, response) {
  response.json(friendsArray);
});


// add POST code to handle survey results

app.post("/friends", function(request, response){
  friendsArray.push(request.body);
  response.json()
})
} 