const Sequelize = require('sequelize');
const { config } = require('../config/db.config')

const { host, username, password, port, dialect } = config() 

const sequelize = new Sequelize(dialect, username, password, {
  host,
  port,
  dialect,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }, 
});

sequelize.authenticate()
    .then(() => console.log('dataBase connect...'))
    .catch( err => console.error(err))
    
module.exports = {
  sequelize
}
// pg@6 pg-hstore intall drive of postgres