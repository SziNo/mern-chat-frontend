import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://mern-chat-backend-j0dv.onrender.com/api',
  withCredentials: true,
})
