import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render, screen } from '@testing-library/react';

import { darkTheme } from '../../../styles/theme';
import ContactPage from '..';

describe('rendering ContactPage', () => {
  test('check text', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ContactPage />
      </ThemeProvider>
    );

    expect(screen.getByText('Our representatives are available:')).toBeTruthy();
    expect(screen.getByText('hello.minsk@thebankofminsk.com')).toBeTruthy();
    expect(screen.getByText('+375 (33) 000-00-00')).toBeTruthy();
  });
});
