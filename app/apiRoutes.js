// display json of all possible friends
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

  