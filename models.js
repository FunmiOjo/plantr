const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/plantr');

// sequelize.authenticate().then(() => {console.log("database is connected");})
//   .catch(err => {console.log("database is not connected", err)});

module.exports = sequelize;