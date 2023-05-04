import { modalCurrencyCardText } from '@constants/texts/components/modalCurrencyCard'
import { ICurrencyItem } from '@models/ICurrencyItem'
import React, { FC, useState } from 'react'

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
} from './styles'
import { ModalCurrencyCardProps } from './types'

const ModalCurrencyCard: FC<ModalCurrencyCardProps> = ({
  isVisible,
  handleClose,
  chosenCurrency,
  allCurrenciesArray,
}) => {
  const [value, setValue] = useState<ICurrencyItem>()

  if (!isVisible) {
    return null
  }

  const options = allCurrenciesArray.filter(
    (item) => item.code !== chosenCurrency.code
  )

  const selectOption = (option: ICurrencyItem) => {
    setValue(option)
  }

  const { selectButtonText, equalsTo, closeButtonText } = modalCurrencyCardText

  return (
    isVisible && (
      <Wrapper>
        <ContentWrapper>
          <SelectWrapper>
            <SelectButton data-cy="selectCurrency">
              {selectButtonText}
            </SelectButton>
            <SelectMenu>
              {options.map((option) => (
                <SelectItem
                  key={option.code}
                  onClick={(e) => {
                    e.stopPropagation()
                    selectOption(option)
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
              <Status>
                {(chosenCurrency.value / value?.value).toFixed(8)}
              </Status>
            )}
          </CurrencyWrapper>
          <Button onClick={handleClose}>{closeButtonText}</Button>
        </ContentWrapper>
      </Wrapper>
    )
  )
}

export default ModalCurrencyCard
