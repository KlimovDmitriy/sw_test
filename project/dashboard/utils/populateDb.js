const bcrypt = require('bcrypt');
const Event = require('../models/adResult')
const {MONGODB_URL} = require('./config')
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URL)



const populateDb = async () => {
  try {
    const payments = Array.from({length: 100}, () => {
      const day = Math.floor(Math.random()*10)+1;
      const price = Math.floor(Math.random()*100);
      return {
        type: 'pay',
        createdAt: Date.parse(`2022-08-${day}`),
        additionalData: {
          price: price
        }
      }
    })
    const installations = Array.from({length: 100}, () => {
      const day = Math.floor(Math.random()*10)+1;
      return {
        type: 'install',
        createdAt: Date.parse(`2022-08-${day}`)
      }
    })
    await Event.insertMany(payments)
    await Event.insertMany(installations)
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

populateDb()