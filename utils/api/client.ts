import axios from 'axios'
import { useTokenStore } from '@store'
import { LOGIN_ROUTE } from '@routes'
import { TIME_MASTER_BASE_URL } from './const'

export const client = axios.create({
  baseURL: TIME_MASTER_BASE_URL,
  timeoutErrorMessage: 'TIMEOUT_ERROR',
  timeout: 60000,
})

client.interceptors.request.use(
  config => {
    const tempConfig = config
    if (tempConfig.baseURL === TIME_MASTER_BASE_URL) {
      tempConfig.headers.Authorization = useTokenStore.getState().timeApiToken
    } else {
      tempConfig.headers.Authorization = `Bearer ${useTokenStore.getState().jobsApiToken}`
    }
    return tempConfig
  },
  error => {
    return Promise.reject(error)
  },
)

client.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      window.location.replace(LOGIN_ROUTE)
    } else {
      return Promise.reject(error)
    }
    return null
  },
)

export type ApiResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export interface ApiConfig {
  baseURL?: string
  responseType?: ApiResponseType
  headers: any
}

export interface RequestProps {
  url: string
  payload?: any
  config?: ApiConfig
}

export const getRequest = async ({ url, config }: RequestProps) => {
  return client.get(url, config)
}

export const postRequest = async ({ url, config, payload }: RequestProps) => {
  return client.post(url, payload, config)
}

export const putRequest = async ({ url, config, payload }: RequestProps) => {
  return client.put(url, payload, config)
}

export const patchRequest = async ({ url, config, payload }: RequestProps) => {
  return client.patch(url, payload, config)
}

export const deleteRequest = async ({ url, config }: RequestProps) => {
  return client.delete(url, config)
}

const api = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  patch: patchRequest,
  delete: deleteRequest,
}

export default api
