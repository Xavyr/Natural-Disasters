const URI = 'mongodb://menothe:codesmith@ds221148.mlab.com:21148/disasters';
const mongoose = require('mongoose');
mongoose.connect(URI);

let Schema = mongoose.Schema;

let disasterSchema = new Schema({
  countryName: String,
  countryCode: String,
  disasterTypeId: String,
  disasterType: String,
  timeRangeId: String,
  timeRange: String,
  events: Number,
  deaths: Number,
  peopleAffected: Number
});

let Disaster = mongoose.model('disasters', disasterSchema);

module.exports = Disaster;
