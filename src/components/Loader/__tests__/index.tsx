import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import Loader from '..';

describe('rendering Loader', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Loader />
      </ThemeProvider>
    );

    expect(screen.getByText('loading...')).toBeTruthy();
  });
});
