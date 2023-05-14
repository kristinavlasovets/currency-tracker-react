import React, { FC, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import CurrencyCard from '@components/CurrencyCard';
import ModalCurrencyCard from '@components/ModalCurrencyCard';
import SectionHeading from '@components/SectionHeading';
import { sectionHeadingText } from '@constants/config/components/sectionHeading';
import { Currencies } from '@constants/currencies';
import { ICurrencyItem } from '@types';

import { getCurrencyData } from '../../services';

import { CardWrapper, Wrapper } from './styles';

const HomePage: FC = () => {
  const [allCurrencies, setAllCurrencies] = useState<ICurrencyItem[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [chosenCurrency, setChosenCurrency] = useState<ICurrencyItem>(
    {} as ICurrencyItem
  );

  const allCurrenciesArray = Object.values(allCurrencies);

  useEffect(() => {
    getCurrencyData().then(({ data }) => {
      setAllCurrencies(data.data);
    });
  }, []);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleCurrency = (code: string) => () => {
    const currency = allCurrenciesArray.find((item) => item.code === code);

    if (currency) {
      setChosenCurrency(currency);
      handleVisible();
    }
  };

  const filteredCurrencies = useMemo(
    () =>
      allCurrenciesArray.filter(
        ({ code }) => code === Currencies.BTC || code === Currencies.ETH
      ),
    [allCurrenciesArray]
  );

  const { titleActions, titleQuotes } = sectionHeadingText;

  return (
    <Wrapper>
      <SectionHeading text={titleActions} />
      <CardWrapper data-cy="selectOption">
        {createPortal(
          <ModalCurrencyCard
            isVisible={isVisible}
            handleClose={handleVisible}
            chosenCurrency={chosenCurrency}
            allCurrenciesArray={allCurrenciesArray}
          />,
          document.body
        )}
        {filteredCurrencies.map(({ code, value }) => (
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
  );
};

export default HomePage;
