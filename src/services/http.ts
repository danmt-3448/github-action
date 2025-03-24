import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { CREATED, INTERNAL_SERVER_ERROR, SUCCEEDED } from '@/constants/statusResponse'

export const customAxiosInstance = (baseURL: string): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return axiosInstance
}

export const customAxiosInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === SUCCEEDED || response.status === CREATED) {
        return response.data
      }
      return response
    },
    (error: AxiosError) => {
      const { response } = error
      if (response) {
        if (response.status === INTERNAL_SERVER_ERROR) {
          console.log('internal server error')
        } else {
          console.log('unexpected error')
        }
      }

      return Promise.reject(error)
    }
  )
}

export const customAxiosService = (axiosInstance: AxiosInstance) => {
  const service = {
    get<T = unknown>(url: string, data?: object): Promise<T> {
      return axiosInstance.get(url, { params: data })
    },

    post<T = unknown>(url: string, data?: object): Promise<T> {
      return axiosInstance.post(url, data)
    }
  }

  return service
}
