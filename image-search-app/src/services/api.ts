import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'HPbxV9wxftClGyegp_lKtylAaoHGInw3KhUkZN9GbQE';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = (query: string, page: number) => {
  return api.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 6,
    },
  });
};

export const getImageDetails = (id: string) => {
  return api.get(`/photos/${id}`);
};