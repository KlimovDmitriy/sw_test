import axios from 'axios'
const baseUrl = '/api/dashboard'

const getEventsData = async () => {
  const response = await axios.get(baseUrl);
  return response.data
}
export default { getEventsData }