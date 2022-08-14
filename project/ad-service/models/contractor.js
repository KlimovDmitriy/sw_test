const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
  name: String,
  token: {
    type: String,
    required: true,
  },
  callbackUrl: String,
  eventType: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
});

contractorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;