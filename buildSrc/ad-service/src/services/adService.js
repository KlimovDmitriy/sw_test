/*
* Обработчик рекламных событий
 */

import axios from 'axios';

const baseUrl = '/api/ads';

const adEvent = async (data) => {
  try {
    await axios.post(baseUrl, data);
    return {message: 'Success'};
  } catch (e) {
    return {error: e, message: 'Failure'};
  }
};

const adService = {adEvent};

export default adService;