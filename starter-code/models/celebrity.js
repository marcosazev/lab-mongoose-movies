const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema  = new Schema({
  name: String,
  ocupation: String,
  catchPhrase: String,

});

const Celebrity = mongoose.model("celebrity", celebritySchema);

module.exports = Celebrity;