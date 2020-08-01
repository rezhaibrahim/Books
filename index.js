var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));

require("./app/routers/router.js")(app);

// const db = require('./app/config/db.js');

// const Role = db.role;
//  db.sequelize.sync({ force: true }).then(() => {
//      console.log('Drop and Resync with { force: true }');
//      initial();
//  });

require("./app/routers/router.js")(app);

// Create a Server
var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
