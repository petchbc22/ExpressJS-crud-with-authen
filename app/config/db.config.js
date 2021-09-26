module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "crud_exam",
  dialect: "mysql",
 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  // HOST: "sql6.freesqldatabase.com",
  // USER: "sql6440225",
  // PASSWORD: "3U4Qa4PdWp",
  // DB: "sql6440225",
  // dialect: "mysql",
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
};
