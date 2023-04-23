import { useState } from 'react'
import { StyledMoneyButton } from './styles'

const MoneyCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <StyledMoneyButton onClick={() => setCount((prev) => prev + 1)}>
      1 USD = {count} BYN
    </StyledMoneyButton>
  )
}

export default MoneyCounter
