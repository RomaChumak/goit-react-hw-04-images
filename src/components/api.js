

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(search, page) {
  const params = new URLSearchParams({
    key: '38443406-02e0c7b1b947ca24dc39fc963',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 12,
  });

  const resp = await axios.get(`?${params}`);
  return await resp.data;
}