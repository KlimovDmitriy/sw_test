/*
* Обработчик событий для профиля контрагента
 */

import axios from "axios";

const baseUrl = '/api/contractors'

// Возвращаем первый элемент, т.к. нет функционала регистрации и авторизации
const getContractor = async () => {
  const response = await axios.get(baseUrl)
  return response.data[0]
}

const addContractorCallback = async (id, callbackUrl) => {
  const response = await axios.put(`${baseUrl}/${id}`, { callbackUrl })
  return response.data
}
const contractorsService = { getContractor, addContractorCallback }

export default contractorsService