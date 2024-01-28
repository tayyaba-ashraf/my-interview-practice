
// import axios from 'axios';

// const baseURL = 'https://jsonplaceholder.typicode.com/';

// const api = axios.create({
//   baseURL,
// });

// export const setAuthToken = (token) => {
//   if (token) {
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     console.log(token);
//   } else {
//     delete api.defaults.headers.common['Authorization'];
//   }
// };

// export default api;
// Axios.js
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';

/**axios instance is api */
const api = axios.create({
  baseURL,
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., set headers)
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    console.log("Request has processed successfuly")
    return response;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default api;

