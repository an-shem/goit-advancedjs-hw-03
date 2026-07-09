import axios from 'axios';
import { VITE_PIXABAY_API_KEY } from './config';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const response = await axios.get('', {
    params: {
      key: VITE_PIXABAY_API_KEY,
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
