import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.anantairways.in/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Response interceptor to format errors standardly
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Standardize error message extracts from server responses
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    const customError = new Error(message);
    customError.status = error.response?.status;
    customError.data = error.response?.data;
    return Promise.reject(customError);
  }
);

export default api;
