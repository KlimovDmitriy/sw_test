const AdResult = require('../models/adResult');
const {AD_TOKEN} = require('../utils/config');
const dashboardRouter = require('express').Router();

dashboardRouter.get('/api/dashboard', async (request, response) => {
  const results = await AdResult.find({});
  return response.status(200).json(results);
});

dashboardRouter.post('/api/dashboard', async (request, response, next) => {
  try {
    const {type, ...data} = request.body.data;
    const token = request.body.token
    if (AD_TOKEN !== token) {
      return response.status(500).json({message: 'Invalid token'}).send()
    }
    const ad = new AdResult({
      type,
      createdAt: new Date(),
      additionalData: data,
    });
    await ad.save();
    console.log(response.status(200).json({message: 'Success'}).send())
    return response.status(200).json({message: 'Success'}).send();
  } catch (e) {
    return response.status(500).json({message: 'Failure', error: JSON.stringify(e)}).send();
  }

});

module.exports = dashboardRouter;