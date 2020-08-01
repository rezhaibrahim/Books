const bookController = require("../controllers/bookController.js");

module.exports = function (app) {
  //books
  app.post("/books", bookController.addBook);
  app.get("/books", bookController.viewBook);
  app.get("/detail/:id", bookController.detailBook);
  app.get("/books/:id", bookController.viewIdBook);
  app.put("/books/:id", bookController.updateBook);
  app.delete("/books/:id", bookController.deleteBook); // error handler 404

  app.use(function (req, res, next) {
    return res.status(404).send({
      status: 404,
      message: "Not Found",
    });
  }); // error handler 500

  app.use(function (err, req, res, next) {
    return res.status(500).send({
      error: err,
    });
  });
};
