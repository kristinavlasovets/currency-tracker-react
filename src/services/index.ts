import { ICurrency } from '@models/ICurrency'
import { CURRENCY_API_URL } from '@shared/sharedUrls'
import axios, { AxiosResponse } from 'axios'

export const getCurrencyData = (): Promise<AxiosResponse> => {
  return axios.get<ICurrency[]>(
    CURRENCY_API_URL +
      `/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}&currencies=EUR%2CUSD%2CBTC%2CETH%2CLTC%2CJPY%2CCNY%2CAUD%2CCAD%2CARS%2CBYN`
  )
}
