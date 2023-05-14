import React, { FC, useState } from 'react';

import { modalCurrencyCardText } from '@constants/config/components/modalCurrencyCard';
import { ICurrencyItem } from '@types';

import {
  Button,
  ContentWrapper,
  CurrencyWrapper,
  Name,
  SelectButton,
  SelectItem,
  SelectMenu,
  SelectWrapper,
  Status,
  Wrapper,
} from './styles';
import { ModalCurrencyCardProps } from './types';

const ModalCurrencyCard: FC<ModalCurrencyCardProps> = ({
  isVisible,
  handleClose,
  chosenCurrency,
  allCurrenciesArray,
}) => {
  const [value, setValue] = useState<ICurrencyItem>();
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  if (!isVisible) {
    return null;
  }

  const options = allCurrenciesArray.filter(
    (item) => item.code !== chosenCurrency.code
  );

  const selectOption = (option: ICurrencyItem) => {
    setValue(option);
    setIsDropdownVisible(false);
  };

  const { selectButtonText, equalsTo, closeButtonText } = modalCurrencyCardText;

  return (
    <Wrapper>
      <ContentWrapper>
        <Button onClick={handleClose}>{closeButtonText}</Button>
        <SelectWrapper>
          <SelectButton
            data-cy="selectCurrency"
            onClick={() => setIsDropdownVisible(true)}
          >
            {value ? value.code : selectButtonText}
          </SelectButton>

          <SelectMenu isDropdownVisible={isDropdownVisible}>
            {options.map((option) => (
              <SelectItem
                key={option.code}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                }}
                data-cy="selectCurrencyItem"
              >
                {option.code}
              </SelectItem>
            ))}
          </SelectMenu>
        </SelectWrapper>
        {value && (
          <CurrencyWrapper>
            <Name>{value?.code}</Name>
            <Status>{equalsTo}</Status>
          </CurrencyWrapper>
        )}
        <CurrencyWrapper>
          <Name>{chosenCurrency.code}</Name>
          {value && (
            <Status>{(chosenCurrency.value / value?.value).toFixed(8)}</Status>
          )}
        </CurrencyWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ModalCurrencyCard;
