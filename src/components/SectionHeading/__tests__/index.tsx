import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import SectionHeading from '..';

import '@testing-library/jest-dom';

describe('rendering SectionHeading', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <SectionHeading text="Actions" />
      </ThemeProvider>
    );
  });
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <SectionHeading text="Quotes" />
      </ThemeProvider>
    );
  });
});
