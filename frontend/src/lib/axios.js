import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  timeout: 10000, // 10 second timeout
  retry: 3, // Retry failed requests
  retryDelay: 1000, // Wait 1 second between retries
});

// Add response interceptor for better error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ERR_HTTP2_PING_FAILED' || error.code === 'ERR_NETWORK') {
      console.error('Network error detected:', error.code);
      // You could show a user-friendly message here
    }
    return Promise.reject(error);
  }
);
