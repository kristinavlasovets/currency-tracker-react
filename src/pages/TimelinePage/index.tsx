import React, { FC, useEffect, useState } from 'react';
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
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

import { getTimelineData } from '@api/index';
import { timelineText } from '@constants/config/pages/timeline';
import { Colors } from '@constants/styles/colors';
import { currencyIcons } from '@constants/styles/icons';
import chooseCurrencyIconHandler from '@helpers/index';
import { options } from '@shared/sharedData';
import { IChartCurrency, IOption } from '@typess/index';

import {
  ChartWrapper,
  CurrencyIcon,
  CurrencyIconWrapper,
  CurrencyName,
  CurrencyNameWrapper,
  SelectButton,
  SelectItem,
  SelectMenu,
  SelectWrapper,
  Text,
} from './styles';
import { SelectOption } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ...registerables
);

const TimelinePage: FC = () => {
  const [value, setValue] = useState<IOption>(options[0]);
  const [icon, setIcon] = useState<string>(currencyIcons.BTC);
  const [chartData, setChartData] = useState<IChartCurrency[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const currencyIcon = chooseCurrencyIconHandler(value.label);

  const { imgAlt, labelText } = timelineText;

  const selectOption = (option: SelectOption) => {
    setValue(option);
  };

  const handleOption = (option: IOption) => () => {
    selectOption(option);
  };

  useEffect(() => {
    getTimelineData(value.label)
      .then((data) => {
        setChartData(data.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [value.label]);

  const [currencyData, setCurrencyData] = useState({
    labels: chartData.map((item) => item.time_close.slice(5, 10)),
    datasets: [
      {
        label: labelText,
        data: chartData.map((item) => item.price_close),
        backgroundColor: Colors.RED,
        borderColor: Colors.RED,
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setCurrencyData({
      labels: chartData.map((item) => item.time_close.slice(5, 10)),
      datasets: [
        {
          label: labelText,
          data: chartData.map((item) => item.price_close),
          backgroundColor: Colors.RED,
          borderColor: Colors.RED,
          borderWidth: 2,
        },
      ],
    });

    setIcon(currencyIcon);
  }, [currencyIcon, chartData, labelText]);

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
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ChartWrapper>
          <Line data={currencyData} />
          <Bar data={currencyData} />
        </ChartWrapper>
      )}
    </>
  );
};

export default TimelinePage;
