import * as React from 'react'
import { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'theme-ui'

import Meta from '../components/meta'
import theme from '../lib/theme'
import '../public/fonts.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PlausibleProvider domain="lachlanjc.com">
      <ThemeProvider theme={theme}>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default App
