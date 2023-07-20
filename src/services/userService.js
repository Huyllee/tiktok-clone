import axios from '~/utils/httpsRequest';

const fetchSearchAPI = (searchInput, type = 'less') => {
   return axios.get(`/api/users/search?q=${encodeURIComponent(searchInput)}&type=${type}`);
};

export { fetchSearchAPI };
