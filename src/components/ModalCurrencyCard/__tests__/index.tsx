import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import ModalCurrencyCard from '../';

describe('rendering ModalCurrencyCard', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ModalCurrencyCard
          isVisible={true}
          chosenCurrency={{ code: 'USD', value: 5 }}
          allCurrenciesArray={[]}
          handleClose={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Choose the currency')).toBeTruthy();
    expect(screen.getByText('close')).toBeTruthy();
  });
});
