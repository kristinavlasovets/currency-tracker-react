export interface BarLineChartProps {
  chartData: {
    labels: number[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string
      borderColor: string
      borderWidth: number
    }[]
  }
}
