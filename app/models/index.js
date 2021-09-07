const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.movie = require("../models/movie.model.js")(sequelize, Sequelize);
db.rate = require("../models/rate.model.js")(sequelize, Sequelize);
db.movieRates = require("../models/movieRates.model.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
//--------------------------------------------------------//
db.rate.belongsToMany(db.movie, {
  through: "movierates", // ตารางที่เก็บ pk ของ movie และ rate
  foreignKey: "rateId",
  otherKey: "movieId",
});
db.movie.belongsToMany(db.rate, {
  through: "movierates", // ตารางที่เก็บ pk ของ movie และ rate
  foreignKey: "movieId",
  otherKey: "rateId",
});
// db.movie.belongsToMany(db.movieRates, {
//   through: "data",
// });

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin", "teamleader"];

module.exports = db;
