import { currencyIcons } from '@constants/styles/icons';

const chooseCurrencyIconHandler = (code: string) => {
  switch (code) {
    case 'EUR':
      return currencyIcons.EUR;
    case 'USD':
      return currencyIcons.USD;
    case 'BTC':
      return currencyIcons.BTC;
    case 'ETH':
      return currencyIcons.ETH;
    case 'LTC':
      return currencyIcons.LTC;
    case 'JPY':
      return currencyIcons.JPY;
    case 'CNY':
      return currencyIcons.CNY;
    case 'AUD':
      return currencyIcons.AUD;
    case 'CAD':
      return currencyIcons.CAD;
    case 'ARS':
      return currencyIcons.ARS;
    case 'BYN':
      return currencyIcons.BYN;
    default:
      return currencyIcons.BYN;
  }
};

export default chooseCurrencyIconHandler;
