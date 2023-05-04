import aud from '@assets/svg/icons/currencyCard/au-dollar.svg'
import btc from '@assets/svg/icons/currencyCard/bitcoin.svg'
import byn from '@assets/svg/icons/currencyCard/bovespa.svg'
import cad from '@assets/svg/icons/currencyCard/can-dollar.svg'
import usd from '@assets/svg/icons/currencyCard/dollar.svg'
import eur from '@assets/svg/icons/currencyCard/euro.svg'
import eth from '@assets/svg/icons/currencyCard/IFIX.svg'
import ltc from '@assets/svg/icons/currencyCard/libra.svg'
import ars from '@assets/svg/icons/currencyCard/peso.svg'
import cny from '@assets/svg/icons/currencyCard/won.svg'
import jpy from '@assets/svg/icons/currencyCard/yen.svg'

export const currencyIcons = {
  EUR: eur,
  USD: usd,
  BTC: btc,
  ETH: eth,
  LTC: ltc,
  JPY: jpy,
  CNY: cny,
  AUD: aud,
  CAD: cad,
  ARS: ars,
  BYN: byn,
}

export type CurrencyIcons = typeof currencyIcons
