import axios from 'axios'
const baseUrl = '/api/charts'

const login = async ({ username, password }) => {
  const request = await axios.post(`${baseUrl}/login`, { username, password })
  return request.data
}

const register = async ({ username, password }) => {
  const request = await axios.post(`${baseUrl}/register`, { username, password })
  return request.data
}
export default { login, register }