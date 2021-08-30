module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    movieId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    
    },
    movieName: {
      type: Sequelize.STRING,
    },
    yearReleased: {
      type: Sequelize.INTEGER,
    },
    pathIMG: {
      type: Sequelize.STRING,
    },
  });

  return Movie;
};
