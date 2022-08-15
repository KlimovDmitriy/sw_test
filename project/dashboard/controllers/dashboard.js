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
      return {status: 500, message: 'Invalid token'};
    }
    const ad = new AdResult({
      type,
      createdAt: new Date(),
      additionalData: data,
    });
    await ad.save();
    return {status: 200, message: 'Success'};
  } catch (e) {
    return {status: 500, message: 'Failure', error: JSON.stringify(e)};
  }

});

module.exports = dashboardRouter;