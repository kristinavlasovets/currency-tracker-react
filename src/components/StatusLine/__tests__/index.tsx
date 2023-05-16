import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import StatusLine from '..';

describe('rendering StatusLine', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <StatusLine />
      </ThemeProvider>
    );

    expect(screen.getByText('Last update at h')).toBeTruthy();
  });
});
