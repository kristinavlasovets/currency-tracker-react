import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import Header from '../';

describe('rendering Header', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Header
            isDarkTheme={true}
            toggleTheme={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Timeline')).toBeTruthy();
    expect(screen.getByText('Bankcard')).toBeTruthy();
    expect(screen.getByText('Contact')).toBeTruthy();
  });
});
