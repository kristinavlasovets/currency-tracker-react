import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  registerables,
  Title,
  Tooltip,
} from 'chart.js'
import React, { FC } from 'react'
import { Bar, Line } from 'react-chartjs-2'

import { Wrapper } from './styles'
import { BarLineChartProps } from './types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ...registerables
)

const BarLineChart: FC<BarLineChartProps> = ({ chartData }) => {
  return (
    <Wrapper>
      <Line data={chartData} />
      <Bar data={chartData} />
    </Wrapper>
  )
}

export default BarLineChart
