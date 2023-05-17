import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import Footer from '..';

import '@testing-library/jest-dom';

describe('rendering Footer', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Modsen Currency Tracker')).toBeTruthy();
    expect(
      screen.getByText(
        "Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide."
      )
    ).toBeTruthy();
    expect(screen.getByText('Market')).toBeTruthy();
    expect(screen.getByText('Service')).toBeTruthy();
    expect(screen.getByText('Product')).toBeTruthy();
    expect(screen.getByText('Sparks')).toBeTruthy();
    expect(screen.getByText('Snaps')).toBeTruthy();
    expect(screen.getByText('Community')).toBeTruthy();
    expect(screen.getByText('Ideas')).toBeTruthy();
    expect(screen.getByText('Streams')).toBeTruthy();
    expect(
      screen.getByText('Startsup © 2023-2024, All Rights Reserved')
    ).toBeTruthy();
  });
});
