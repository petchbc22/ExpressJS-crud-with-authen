const db = require("../models");
const Rate = db.rate;

exports.rates = (req, res) => {
  Rate.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};



