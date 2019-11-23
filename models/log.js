const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LogSchema = new Schema(
  {
    message: {type: String, required: true},
    level: {type: String, max: 100},
    logger: {type: String, max: 100},
    timestamp: {type: Date},
    stacktrace: {type: String}
  }
);

//Export model
module.exports = mongoose.model('Log', LogSchema);