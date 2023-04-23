import React from 'react'
import image from './currency.svg'
import MoneyCounter from './components/MoneyCounter'
import { GlobalStyles } from './styles/globalStyles'
import Banner from './components/Banner'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Banner />
      <img src={image} alt="logo" width="300" height="300" />
      <MoneyCounter />
    </>
  )
}

export default App
