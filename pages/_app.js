import { ThemeProvider } from 'theme-ui'
import Meta from '../components/meta'
import { Analytics } from '@vercel/analytics/react'
import theme from '../lib/theme'
import '../public/fonts.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
