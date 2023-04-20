import React from 'react'
import './styles.css'
import image from './currency.svg'
import MoneyCounter from './MoneyCounter'

const App = () => {
  return (
    <>
      <h1>Hello World from Scratch!</h1>
      <img src={image} alt="logo" width="300" height="300" />
      <MoneyCounter />
    </>
  )
}

export default App
