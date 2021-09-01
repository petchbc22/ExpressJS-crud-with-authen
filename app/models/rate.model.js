module.exports = (sequelize, Sequelize) => {
    const Rate = sequelize.define("rate", {
      rateId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      rate: {
        type: Sequelize.STRING,
      },
    });
  
    return Rate;
  };
  