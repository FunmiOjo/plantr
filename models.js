const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/plantr');

// sequelize.authenticate().then(() => {console.log("database is connected");})
//   .catch(err => {console.log("database is not connected", err)});

const Gardener = sequelize.define('gardeners', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = sequelize.define('plots', {
  size: Sequelize.STRING,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = sequelize.define('vegetables', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

module.exports = sequelize;
