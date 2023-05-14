import axios, { AxiosResponse } from 'axios';

import { envVariables } from '@constants/envVariables';
import { IChartCurrency, ICurrency } from '@types';

const { currencyApiUrl, currencyApiKey, coinApiUrl, coinApiKey } = envVariables;

export const getCurrencyData = (): Promise<AxiosResponse> => {
  return axios.get<ICurrency[]>(
    `${currencyApiUrl}/latest?apikey=${currencyApiKey}&currencies=EUR%2CUSD%2CBTC%2CETH%2CLTC%2CJPY%2CCNY%2CAUD%2CCAD%2CARS%2CBYN`
  );
};

const options = {
  hostname: 'rest.coinapi.io',
  headers: { 'X-CoinAPI-Key': `${coinApiKey}` },
};

export const getTimelineData = (label: string): Promise<AxiosResponse> => {
  return axios.get<IChartCurrency[]>(
    `${coinApiUrl}/ohlcv/BITSTAMP_SPOT_${label}_USD/latest?period_id=1DAY&limit=30`,
    options
  );
};
