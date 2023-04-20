import { useState } from 'react'

const MoneyCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        1 USD = {count} BYN
      </button>
    </div>
  )
}

export default MoneyCounter
