import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import HomePage from '..';

describe('rendering HomePage', () => {
  test('check text', async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <HomePage />
      </ThemeProvider>
    );

    const headingAction = await screen.findByText('Actions');
    expect(headingAction).toBeInTheDocument();
    const headingQuote = await screen.findByText('Quotes');
    expect(headingQuote).toBeInTheDocument();
  });
});
