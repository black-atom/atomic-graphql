const isDatabaseConnected = db => db.authenticate()
  .then(()=> console.log("here"))
  .then(() => db.sync())
  .catch(err => console.log(err));

module.exports = {
  isDatabaseConnected,
};
