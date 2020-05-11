var matchListArray = require("./../data/friends");
module.exports =function(app) {
// display json of all possible friends
app.get("/friends", function(request, response) {
  response.json(matchListArray);
});

}