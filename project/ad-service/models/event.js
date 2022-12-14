const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  type: String,
})

eventSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const Event = mongoose.model('Event', eventSchema);

module.exports = Event