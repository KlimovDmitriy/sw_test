const bcrypt = require('bcrypt');
const Contractor = require('../models/contractor');
const contractorRouter = require('express').Router();

contractorRouter.get('/api/contractors', async (request, response) => {
  const contractors = await Contractor.find({}).populate('eventType');
  return response.json(contractors);
});

// Добавляем контрагенту колбэк для отправки данных
contractorRouter.put('/api/contractors/:id',
    async (request, response, next) => {
      const {callbackUrl} = request.body;
      const savedContractor = await Contractor.findByIdAndUpdate(
          request.params.id, {callbackUrl}, {new: true});
      response.json(savedContractor);
    });

// Функция для дальнейшей возможности добавления контрагентов
// contractorRouter.post('/api/contractors', async (request, response, next) => {
//   const {name} = request.body
//   const saltRounds = 10;
//   const token = await bcrypt.hash(name, saltRounds);
//   const contractor = new Contractor({
//     name,
//     token
//   })
//   const result = await contractor.save();
//   response.status(201).json(result)
// })

module.exports = contractorRouter;