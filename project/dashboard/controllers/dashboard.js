const AdResult = require('../models/adResult');
const {AD_TOKEN} = require('../utils/config');
const dashboardRouter = require('express').Router();

dashboardRouter.get('/api/dashboard', async (request, response) => {
  const results = await AdResult.find({});
  return response.status(200).json(results);
});

dashboardRouter.post('/api/dashboard', async (request, response, next) => {
  try {
    console.log(request.body)
    const {type, ...data} = request.body.data;
    const token = request.body.token
    if (AD_TOKEN !== token) {
      response.status(500).json({message: 'Invalid token'})
    }
    const ad = new AdResult({
      type,
      createdAt: new Date(),
      additionalData: data,
    });
    await ad.save();
    response.status(200).json({message: 'Success'});
  } catch (e) {
    response.status(500).json({message: 'Failure', error: e});
  }

});

module.exports = dashboardRouter;