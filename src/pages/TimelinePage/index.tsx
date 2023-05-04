import BarLineChart from '@components/BarLineChart'
import { Colors } from '@constants/styles/colors'
import { currencyIcons } from '@constants/styles/icons'
import { timelineText } from '@constants/texts/pages/timeline'
import chooseCurrencyIconHandler from '@helpers'
import { IOption } from '@models/IOption'
import { options } from '@shared/sharedData'
import React, { FC, useEffect, useState } from 'react'

import {
  CurrencyIcon,
  CurrencyIconWrapper,
  CurrencyName,
  CurrencyNameWrapper,
  SelectButton,
  SelectItem,
  SelectMenu,
  SelectWrapper,
} from './styles'
import { SelectOption } from './types'

const TimelinePage: FC = () => {
  const [value, setValue] = useState<IOption>(options[0])
  const [icon, setIcon] = useState<string>(currencyIcons.EUR)

  const currencyIcon = chooseCurrencyIconHandler(value.label, currencyIcons)

  const selectOption = (option: SelectOption) => {
    setValue(option)
  }

  const handleOption = (option: IOption) => () => {
    selectOption(option)
  }

  const [currencyData, setCurrencyData] = useState({
    labels: value.currency.map((data) => data.date),
    datasets: [
      {
        label: value.label,
        data: value.currency.map((data) => data.rate),
        backgroundColor: Colors.RED,
        borderColor: Colors.RED,
        borderWidth: 2,
      },
    ],
  })

  useEffect(() => {
    setCurrencyData({
      labels: value.currency.map((data) => data.date),
      datasets: [
        {
          label: value.label,
          data: value.currency.map((data) => data.rate),
          backgroundColor: Colors.RED,
          borderColor: Colors.RED,
          borderWidth: 2,
        },
      ],
    })

    setIcon(currencyIcon)
  }, [currencyIcon, value])

  const { imgAlt } = timelineText

  return (
    <>
      <SelectWrapper>
        <SelectButton>{value.label}</SelectButton>
        <SelectMenu>
          {options.map((option) => (
            <SelectItem
              key={option.label}
              onClick={handleOption(option)}
              data-cy="selectCurrency"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectMenu>
      </SelectWrapper>
      <CurrencyNameWrapper>
        <CurrencyIconWrapper>
          <CurrencyIcon src={icon} alt={imgAlt} />
        </CurrencyIconWrapper>
        <CurrencyName>{value.label}</CurrencyName>
      </CurrencyNameWrapper>
      <BarLineChart chartData={currencyData} />
    </>
  )
}

export default TimelinePage
