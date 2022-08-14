const bcrypt = require('bcrypt');
const Contractor = require('../models/contractor')
const Event = require('../models/event')
const {MONGODB_URL} = require('./config')
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URL)

const events = [
  {type: 'install'},
  {type: 'pay'}
]

const populateDb = async () => {
  try {
    const savedEvents = await Event.insertMany(events)
    const eventIds = savedEvents.map(event => event._id.toString().trim())
    const name = 'ScoreWarrior'
    const saltRounds = 10;
    const token = await bcrypt.hash(name, saltRounds);
    const contractor = new Contractor({
      name,
      token,
      eventType: eventIds

    })
    const newContractor = await contractor.save()

    await contractor.save()
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

populateDb()