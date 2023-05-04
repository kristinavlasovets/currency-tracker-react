import CurrencyCard from '@components/CurrencyCard'
import ModalCurrencyCard from '@components/ModalCurrencyCard'
import SectionHeading from '@components/SectionHeading'
import { Currencies } from '@constants/currencies'
import { sectionHeadingText } from '@constants/texts/components/sectionHeading'
import { ICurrencyItem } from '@models/ICurrencyItem'
// import { allCurrenciesArray } from '@shared/sharedData'
import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { getCurrencyData } from '../../services'
import { CardWrapper, Wrapper } from './styles'

const HomePage: FC = () => {
  const [allCurrencies, setAllCurrencies] = useState<ICurrencyItem[]>([])
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [chosenCurrency, setChosenCurrency] = useState<ICurrencyItem>(
    {} as ICurrencyItem
  )

  const allCurrenciesArray = Object.values(allCurrencies)

  useEffect(() => {
    // axios
    //   .get(
    //     CURRENCY_API_URL +
    //       `/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}&currencies=EUR%2CUSD%2CBTC%2CETH%2CLTC%2CJPY%2CCNY%2CAUD%2CCAD%2CARS%2CBYN`
    //   )
    getCurrencyData().then(({ data }) => {
      setAllCurrencies(data.data)
    })
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleVisible = () => {
    setIsVisible(true)
  }

  const handleCurrency = (code: string) => () => {
    const currency = allCurrenciesArray.find((item) => item.code === code)

    if (currency) {
      setChosenCurrency(currency)
      handleVisible()
    }
  }

  const { titleActions, titleQuotes } = sectionHeadingText

  return (
    <Wrapper>
      <SectionHeading text={titleActions} />
      <CardWrapper data-cy="selectOption">
        {createPortal(
          <ModalCurrencyCard
            isVisible={isVisible}
            handleClose={handleClose}
            chosenCurrency={chosenCurrency}
            allCurrenciesArray={allCurrenciesArray}
          />,
          document.body
        )}
        {allCurrenciesArray
          .filter(
            ({ code }) => code === Currencies.BTC || code === Currencies.ETH
          )
          .map(({ code, value }) => (
            <CurrencyCard
              key={code}
              handleCurrency={handleCurrency(code)}
              code={code}
              value={value}
            />
          ))}
      </CardWrapper>
      <SectionHeading text={titleQuotes} />
      <CardWrapper>
        {allCurrenciesArray
          .filter(
            ({ code }) => code !== Currencies.BTC && code !== Currencies.ETH
          )
          .map(({ code, value }) => (
            <CurrencyCard
              key={code}
              handleCurrency={handleCurrency(code)}
              code={code}
              value={value}
            />
          ))}
      </CardWrapper>
    </Wrapper>
  )
}

export default HomePage
