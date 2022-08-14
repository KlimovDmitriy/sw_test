const mongoose = require('mongoose');
const adResultSchema = new mongoose.Schema({
  type: String,
  createdAt: Date,
  additionalData:
      {
        type: Map,
        of: String,
      },

});
adResultSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const AdResult = mongoose.model('AdResult', adResultSchema);

module.exports = AdResult;