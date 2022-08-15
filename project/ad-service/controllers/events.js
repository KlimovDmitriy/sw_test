const Contractor = require('../models/contractor');
const Event = require('../models/event');
const axios = require('axios');
const logger = require('../utils/logger');
const eventsRouter = require('express').Router();
const fetch = require('node-fetch');

eventsRouter.get('/api/events', async (request, response) => {
  const events = await Event.find({});
  return response.json(events);
});

eventsRouter.post('/api/events', async (request, response, next) => {
  const {type, token} = request.body;
  if (!token) {
    return response.status(400).json({error: 'Invalid contactor id'});
  }
  const contractor = await Contractor.findOne({token});
  if (!token) {
    return response.status(400).json({error: 'Non existed contactor'});
  }
  const event = new Event({
    type,
  });
  const newEvent = await event.save();
  contractor.eventType = contractor.eventType.concat(newEvent);
  await contractor.save();
  response.status(201).json(newEvent);
});

eventsRouter.post('/api/ads', async (request, response, next) => {
  try {
    const {token, ...data} = request.body;
    if (!token) {
      return response.status(400).json({error: 'Invalid token'});
    }
    const contractor = await Contractor.findOne({token});
    if (!contractor) {
      return response.status(400).json({error: 'Invalid contractor'});
    }
    const callbackUrl = contractor.callbackUrl;
    const test = await fetch(callbackUrl, {
      method: 'POST',
      body: JSON.stringify({token, data}),
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(test)
    // const callback = await axios.post(callbackUrl, {data, token});
    // console.log(callback)
    response.status(200);
  } catch (e) {
    logger.error(e)
    response.status(400).json({error: JSON.stringify(e)});
  }

});

module.exports = eventsRouter;