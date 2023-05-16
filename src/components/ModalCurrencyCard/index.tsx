import React, { FC, useState } from 'react';

import { modalCurrencyCardText } from '@constants/config/components';
import { ICurrencyItem } from '@typess/index';

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
  const [currentCurrency, setCurrentCurrency] = useState<ICurrencyItem>();
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  if (!isVisible) {
    return null;
  }

  const options = allCurrenciesArray.filter(
    (item) => item.code !== chosenCurrency.code
  );

  const selectOption = (option: ICurrencyItem) => {
    setCurrentCurrency(option);
    setIsDropdownVisible(false);
  };
  const handleOption = (option: ICurrencyItem) => () => {
    selectOption(option);
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
            {currentCurrency ? currentCurrency.code : selectButtonText}
          </SelectButton>
          <SelectMenu isDropdownVisible={isDropdownVisible}>
            {options.map((option) => (
              <SelectItem
                key={option.code}
                onClick={handleOption(option)}
                data-cy="selectCurrencyItem"
              >
                {option.code}
              </SelectItem>
            ))}
          </SelectMenu>
        </SelectWrapper>
        {currentCurrency && (
          <CurrencyWrapper>
            <Name>{currentCurrency?.code}</Name>
            <Status>{equalsTo}</Status>
          </CurrencyWrapper>
        )}
        <CurrencyWrapper>
          <Name>{chosenCurrency.code}</Name>
          {currentCurrency && (
            <Status>
              {(chosenCurrency.value / currentCurrency?.value).toFixed(8)}
            </Status>
          )}
        </CurrencyWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ModalCurrencyCard;
