export const handleRateValue = (value: number) =>
  value > 0.01 ? value.toFixed(2) : value;
