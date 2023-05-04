import AppRouter from '@components/AppRouter'
import Loader from '@components/Loader'
import { ThemeMode } from '@constants/styles/themes'
import { GlobalStyles } from '@styles/globalStyles'
import { darkTheme, lightTheme } from '@styles/theme'
import React, { FC, lazy, Suspense, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const Layout = lazy(() => import('./Layout/Layout'))

const App: FC = () => {
  const [theme, setTheme] = useState<string>(ThemeMode.DARK)
  const isDarkTheme = theme === ThemeMode.DARK
  const toggleTheme = () => {
    setTheme(isDarkTheme ? ThemeMode.LIGHT : ThemeMode.DARK)
  }
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
          <AppRouter />
        </Layout>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
