import axios from 'axios'
import { getToken, logoutService } from './authentication'

export const serverAddress = 'http://192.168.1.3:3000'
export const serverApiFile = 'http://192.168.1.3:3001'
export const serverApi = serverAddress + '/api'

export const axiosInstance = axios.create({
  baseURL: `${serverAddress}/api/`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
})


axios.interceptors.response.use(
  async (e) => {
    if (e.status === 401) {
      await logoutService()
    }

    return e
  },  
)

axiosInstance.interceptors.request.use(
  async config => {
    const token = await getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {    
    return Promise.reject(error.message)
  }
)