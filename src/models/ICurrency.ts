import { ICurrencyItem } from './ICurrencyItem'

export interface ICurrency {
  meta: {
    last_updated_at: string
  }
  data: ICurrencyItem
}
