import { AxiosHeaders, AxiosRequestConfig } from 'axios'
import { ApiResponseType } from './client'

export interface ApiOkResponse<T> {
  ok: true
  problem: null
  originalError: null
  data?: T
  status?: number
  headers?: AxiosHeaders
  config?: AxiosRequestConfig
  duration?: number
}

export interface ApiErrorResponse {
  data: {
    message: string | null
    reason: string | null
    traceId: string
  }
  status: number
}

export interface ApiStateType<T> {
  data?: T
  loading: boolean
  error: boolean
}

export type Method = 'get' | 'delete' | 'post' | 'put' | 'patch'

export interface ApiProps<ResponseType, FormattedDataType = ResponseType> {
  url?: string
  method?: Method
  payload?: any
  headers?: any
  initialData?: FormattedDataType
  lazy?: boolean
  callCondition?: boolean
  dataFormatter?: (data: ResponseType) => FormattedDataType | ResponseType
  onError?: (error: ApiErrorResponse) => void
  onSuccess?: (data: FormattedDataType) => void
  baseURL?: string
  onFinish?: () => void
  responseType?: ApiResponseType
  queryParams?: { [key: string | number]: any }
}

export type ReCallProps<T> = Partial<
  Pick<ApiProps<T>, 'url' | 'payload' | 'onSuccess' | 'onError' | 'onFinish' | 'queryParams'>
>
