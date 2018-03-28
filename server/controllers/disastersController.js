const disastersController = {};
const Disasters = require('./../models/disasterModel');

disastersController.getDisasters = (req, res, next) => {
  Disasters.find().then(results => {
    res.locals.disasters = results;
    next();
  }).catch(err => {
    console.log('unable to retrieve disasters');
  })
}

module.exports = disastersController;
