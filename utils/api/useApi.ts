import { useEffect, useState } from 'react'
import { getQueryParams } from '..'
import { ApiErrorResponse, ApiOkResponse, ApiProps, ApiStateType, ReCallProps } from './type'
import api from './client'

const useApi = <ResponseType, FormattedDataType = ResponseType>(
  props: ApiProps<ResponseType, FormattedDataType>,
) => {
  const {
    method = 'get',
    url = '',
    headers,
    payload,
    initialData,
    lazy,
    callCondition = true,
    dataFormatter = content => content,
    onError = err => err,
    onSuccess = data => data,
    onFinish = () => {},
    baseURL,
    responseType,
    queryParams,
  } = props
  const [data, setData] = useState<ApiStateType<FormattedDataType>>({
    error: false,
    loading: false,
    data: initialData,
  })
  useEffect(() => {
    if (!lazy && callCondition) {
      getDataRequest()
    }
  }, [callCondition])

  const getDataRequest = async (props?: ReCallProps<FormattedDataType>): Promise<any> => {
    try {
      setData({
        error: false,
        loading: true,
      })
      const response = (await api[method]({
        url: props?.url || url + getQueryParams(props?.queryParams || queryParams),
        payload: props?.payload || payload,
        config: {
          headers: {
            'Accept-Language': 'fa',
            ...headers,
          },
          baseURL,
          responseType,
        },
      })) as any as ApiOkResponse<ResponseType>

      const formattedData = dataFormatter(response.data as ResponseType) as FormattedDataType
      setData({
        loading: false,
        error: false,
        data: formattedData,
      })

      const successCallback = props?.onSuccess || onSuccess

      successCallback(formattedData)
    } catch (error: any) {
      setData({
        error: true,
        loading: false,
      })
      const errorCallback = props?.onError || onError
      errorCallback(error.response as ApiErrorResponse)
    } finally {
      onFinish()
    }
  }
  return {
    loading: data.loading,
    error: data.error,
    data: data.data,
    fetch: getDataRequest,
    setData: (data?: FormattedDataType) => setData(prev => ({ ...prev, data })),
  }
}

export default useApi
