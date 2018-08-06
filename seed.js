let db = require('./models');

db.sync({force: true})
.then(() => {
  console.log('Sync is successful!');
  db.close();
})
.catch(function(error) {
  console.log(error);
});


