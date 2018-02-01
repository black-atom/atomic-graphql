const Sequelize = require('sequelize');
const { config } = require('../config/db.config')
const Product = require('./models/product')

const { host, username, password, port, dialect } = config() 
const db = new Sequelize(dialect, username, password, {
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

/*** Instantiate models ***/
const modelsSchema = [Product]
const modelInstances = modelsSchema.map(schema => schema(db))
modelInstances.forEach(modelInstance => modelInstance.associate(db.models))

db.authenticate()
    .then(() => {
      console.log('Successfully connected to the database!')
      return db.sync({force: true})
    })
    .then(() => {
      console.log('Successfully synced schemas!')
    })
    .catch( err => console.log(err))

module.exports = db