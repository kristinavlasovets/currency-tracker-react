import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import ModalCurrencyCard from '..';

describe('rendering ModalCurrencyCard', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ModalCurrencyCard
          isVisible
          chosenCurrency={{
            code: 'USD',
            value: 5,
          }}
          allCurrenciesArray={[]}
          handleClose={() => {}}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Choose the currency')).toBeTruthy();
    expect(screen.getByText('close')).toBeTruthy();
  });
});
