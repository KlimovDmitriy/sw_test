const AdResult = require('../models/adResult');
const {AD_TOKEN} = require('../utils/config');
const logger = require('../utils/logger');
const dashboardRouter = require('express').Router();

dashboardRouter.get('/api/dashboard', async (request, response) => {
  const results = await AdResult.find({});
  return response.status(200).json(results);
});

dashboardRouter.post('/api/dashboard', async (request, response, next) => {
  response.status(201).send({message: 'Success'})
  // try {
  //   const {type, ...data} = request.body.data;
  //   const token = request.body.token
  //   if (AD_TOKEN !== token) {
  //     //Тут можно добавить логгирование для левых запросов на данный эндпоинт
  //   }
  //   const ad = new AdResult({
  //     type,
  //     createdAt: new Date(),
  //     additionalData: data,
  //   });
  //   await ad.save();
  // } catch (e) {
  //   logger.error(e) // Выводим в консоль сервера ошибки, небезопасно
  // }

});

module.exports = dashboardRouter;