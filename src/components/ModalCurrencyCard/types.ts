import { ICurrencyItem } from '@models/ICurrencyItem'

export interface ModalCurrencyCardProps {
  isVisible: boolean
  chosenCurrency: ICurrencyItem
  allCurrenciesArray: ICurrencyItem[]

  handleClose: () => void
}
