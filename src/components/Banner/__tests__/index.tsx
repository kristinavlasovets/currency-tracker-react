/* eslint-env jest */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import Banner from '..';

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('rendering Banner', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Banner />
      </ThemeProvider>
    );

    expect(screen.getByText('Modsen Currency')).toBeTruthy();
    expect(screen.getByText('Tracker')).toBeTruthy();
    expect(
      screen.getByText('Dollar quotation and other international currencies.')
    ).toBeTruthy();
  });
  test('check images', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Banner />
      </ThemeProvider>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
