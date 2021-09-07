module.exports = (sequelize, Sequelize) => {
  const MovieRates = sequelize.define("movierates", {
    movieRateId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rateId: {
      type: Sequelize.INTEGER,
    },
    movieId: {
      type: Sequelize.INTEGER,
    },
  });

  return MovieRates;
};
