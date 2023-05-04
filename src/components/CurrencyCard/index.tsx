import { currencyIcons } from '@constants/styles/icons'
import { currencyCardText } from '@constants/texts/components/currencyCard'
import chooseCurrencyIconHandler from '@helpers'
import React, { FC } from 'react'

import { handleRateValue } from './config'
import {
  CardCurrencyWrapper,
  CardIcon,
  CardIconWrapper,
  CardName,
  CardStatus,
  CardWrapper,
} from './styles'
import { CurrencyCardProps } from './types'

const CurrencyCard: FC<CurrencyCardProps> = ({
  handleCurrency,
  code,
  value,
}) => {
  const cardIcon = chooseCurrencyIconHandler(code, currencyIcons)

  const { imgAlt, baseCurrency } = currencyCardText

  return (
    <CardWrapper onClick={handleCurrency}>
      <CardIconWrapper>
        <CardIcon src={cardIcon} alt={imgAlt} />
      </CardIconWrapper>
      <CardCurrencyWrapper>
        <CardName>{code}</CardName>
        <CardStatus>
          {baseCurrency}
          {handleRateValue(value)}
        </CardStatus>
      </CardCurrencyWrapper>
    </CardWrapper>
  )
}

export default CurrencyCard
