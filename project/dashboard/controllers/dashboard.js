const AdResult = require('../models/adResult');
const {AD_TOKEN} = require('../utils/config');
const logger = require('../utils/logger');
const dashboardRouter = require('express').Router();

dashboardRouter.get('/api/dashboard', async (request, response) => {
  const results = await AdResult.find({});
  return response.status(200).json(results);
});

dashboardRouter.post('/api/dashboard', async (request, response, next) => {
  try {
    logger.info(request.body.data)
    const {type, ...data} = request.body.data.data;
    const token = request.body.token
    if (AD_TOKEN !== token) {
      return response.status(500).send({message: 'Invalid token'})
    }
    const ad = new AdResult({
      type,
      createdAt: new Date(),
      additionalData: data,
    });
    const newAdResult = await ad.save();
    return response.status(200).send({message: JSON.stringify(newAdResult)});
  } catch (e) {
    return response.status(500).send({message: 'Failure', error: JSON.stringify(e)});
  }

});

module.exports = dashboardRouter;