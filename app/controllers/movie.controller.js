const db = require("../models");

const Movie = db.movie;
const Rate = db.rate;
const MovieRates = db.movieRates;
const Op = db.Sequelize.Op;
const { rate } = require("../models");
// const Movie = db.movie;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.movieName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const movie = {
    movieName: req.body.movieName,
    yearReleased: req.body.yearReleased,
    pathIMG: req.body.pathIMG,
  };

  // Save Tutorial in the database
  Movie.create(movie)
    .then((data) => {
      let movieId = data.dataValues.movieId;
      Rate.findAll({
        where: {
          rateId: {
            [Op.or]: req.body.rates,
          },
        },
      }).then((rates) => {
        let dataMovieRates = rates.map((data) => {
          return {
            movieId: movieId,
            rateId: data.rateId,
          };
        });
        console.log("rates------", dataMovieRates);
        MovieRates.bulkCreate(dataMovieRates).then((data) => {
          console.log(data);
          res.send("create movie successfully.");
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.movies = (req, res) => {
  Movie.findAll({ include: [{ model: rate}] })

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    })
    .error((err) => {
      console.log("err----", err.status);
    });
};

exports.movie = (req, res) => {
  const id = req.params.movieId;

  Movie.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.movieId;

  Movie.update(req.body, {
    where: { movieId: id },
  })
    .then((num) => {
      console.log("numf----", num);
      if (num == 1) {
        MovieRates.destroy({
          where: { movieId: id },
        })
          .then((num) => {
            console.log("num----", num);

            Rate.findAll({
              where: {
                rateId: {
                  [Op.or]: req.body.rates,
                },
              },
            }).then((rates) => {
              console.log("ratesxxxx=====", rates);
              let dataMovieRates = rates.map((data) => {
                return {
                  movieId: id,
                  rateId: data.rateId,
                };
              });
              console.log("rates------", dataMovieRates);
              MovieRates.bulkCreate(dataMovieRates).then((data) => {
                console.log(data);
                res.send("update movie successfully.");
              });
            });
            // res.send({
            //   message: "Movie was deleted successfully!",
            // });
          })
          .catch((err) => {
            res.status(500).send({
              message: "Could not update Movie with movieId=" + id,
            });
          });
        // res.send({
        //   message: "Movie was updated successfully.",
        // });
      } else {
        res.send({
          message: `Cannot update Movie with MovieId=${id}. Maybe Movie was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Movie with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.movieId;

  Movie.destroy({
    where: { movieId: id },
  })
    .then((num) => {
      if (num == 1) {
        MovieRates.destroy({
          where: { movieId: id },
        }) .then((num) => {
          if (num == 1) {
            
            res.send({
              message: "Movie was deleted successfully!",
            });
          } else {
            res.send({
              message: `Cannot delete Movie with movieId=${id}. Maybe Movie was not found!`,
            });
          }
        })
      
      } else {
        res.send({
          message: `Cannot delete Movie with movieId=${id}. Maybe Movie was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Movie with movieId=" + id,
      });
    });
};
