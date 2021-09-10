const { authJwt } = require("../middleware");
const controller = require("../controllers/movie.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // all roles
  app.get("/movies", [authJwt.verifyToken], controller.movies);
  // create only roles admin
  app.post(
    "/movie",
    [authJwt.verifyToken, authJwt.isAdmin, authJwt.isTeamleaderOrAdmin],
    controller.create
  );
  app.get("/movies/:movieId", controller.movie);
  // update only admin or teamleader
  app.put(
    "/movie/:movieId",
    [authJwt.verifyToken, authJwt.isAdmin, authJwt.isTeamleaderOrAdmin],
    controller.update
  );
  // delete only admin
  app.delete(
    "/movie/:movieId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
};
