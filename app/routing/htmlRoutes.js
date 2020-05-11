var path = require("path");

module.exports = function(app) {
// based on the URL, the correct html file should be retreived
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "/../public/home.html"));
      });
    
      app.get("/survey", function(request, ressponse) {
        response.sendFile(path.join(__dirname, "/../public/survey.html"));
      });
// By default, send the user to the home page
      app.use(function(request, response) {
          response.sendFile(path.join(__dirname,"/../public/home.html"));
      });

}
