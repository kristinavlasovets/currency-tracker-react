import { CurrencyIcons } from '@constants/styles/icons'

const chooseCurrencyIconHandler = (code: string, currency: CurrencyIcons) => {
  switch (code) {
    case 'EUR':
      return currency.EUR
    case 'USD':
      return currency.USD
    case 'BTC':
      return currency.BTC
    case 'ETH':
      return currency.ETH
    case 'LTC':
      return currency.LTC
    case 'JPY':
      return currency.JPY
    case 'CNY':
      return currency.CNY
    case 'AUD':
      return currency.AUD
    case 'CAD':
      return currency.CAD
    case 'ARS':
      return currency.ARS
    case 'BYN':
      return currency.BYN
    default:
      return currency.BYN
  }
}

export default chooseCurrencyIconHandler
