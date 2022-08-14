const AdResult = require('../models/adResult');
const dashboardRouter = require('express').Router();

dashboardRouter.get('/api/dashboard', async (request, response) => {
  const results = await AdResult.find({});
  return response.status(200).json({message: "Success"});
});

dashboardRouter.post('/api/dashboard', async (request, response, next) => {
  try {
    const {type, ...data} = request.body;
    const ad = new AdResult({
      type,
      additionalData: data.data,
    });
    await ad.save();
    response.status(200).json({message: 'Success'});
  } catch (e) {
    response.status(500).json({message: 'Failure', error: e});
  }

});

module.exports = dashboardRouter;