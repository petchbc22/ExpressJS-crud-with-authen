const { authJwt } = require("../middleware");
const controller = require("../controllers/rate.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
 // all rates 
  app.get("/rates",[authJwt.verifyToken], controller.rates);
  
};
