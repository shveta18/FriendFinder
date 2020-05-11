// display json of all possible friends
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

  app.post("/api/friends", function(req, res) {
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });