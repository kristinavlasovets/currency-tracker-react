import { ICurrencyItem } from '@/@types/index';

export interface ModalCurrencyCardProps {
  isVisible: boolean;
  chosenCurrency: ICurrencyItem;
  allCurrenciesArray: ICurrencyItem[];

  handleClose: () => void;
}

export interface SelectMenuProps {
  isDropdownVisible: boolean;
}
