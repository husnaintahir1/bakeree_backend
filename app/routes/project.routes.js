const { verifySignUp } = require("../middleware");
const controller = require("../controllers/project.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/project/createproject",
    controller.createProject
  );

//   app.post("/api/auth/signin", controller.signin);

//   app.post("/api/auth/signout", controller.signout);
};