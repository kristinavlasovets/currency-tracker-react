import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import ErrorBoundary from '../';

describe('rendering ErrorBoundary', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ErrorBoundary>{'Something went wrong.'}</ErrorBoundary>
      </ThemeProvider>
    );

    expect(screen.getByText('Something went wrong.')).toBeTruthy();
  });
});
