const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/plantr');

// sequelize.authenticate().then(() => {console.log("database is connected");})
//   .catch(err => {console.log("database is not connected", err)});

const Gardener = sequelize.define('gardeners', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const asya = new Gardener({name: 'Asya', age: 30});
asya.create()
.then((newRow) => {
  console.log(newRow);
})
.catch((error) => {
  console.log(error);
})

const funmi = new Gardener({name: 'Funmi', age: 31});
funmi.create();
.then((newRow) => {
  console.log(newRow);
})
.catch((error) {
  console.log(error);
});

const Plot = sequelize.define('plots', {
  size: Sequelize.STRING,
  shaded: Sequelize.BOOLEAN
});

const plot1 = new Plot({size: 'small', shaded: true});
plot.create()
.then((newRow) => {
  console.log(newRow);
  return newRow
})
.then(() => {
  return plot.setGardener(asya);
})
.catch((error) {
  console.log(error);
});

const plot2 = new Plot({size: 'medium', shaded: false});
plot.create()
.then((newRow) => {
  console.log(newRow);
});

plot.setGardener(asya);
const Vegetable = sequelize.define('vegetables', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

Plot.belongsTo(Gardener);
Vegetable.belongsToMany(Plot, {through: 'plotVegetables'});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});

module.exports = sequelize;
