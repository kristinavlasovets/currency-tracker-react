import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  isDarkTheme: boolean;

  toggleTheme: () => void;
}
