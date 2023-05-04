export const handleRateValue = (value: number) => {
  return value > 0.01 ? value.toFixed(2) : value
}
