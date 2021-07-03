import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'

import Meta from '../components/meta'
import theme from '../components/theme'
import '../public/fonts.css'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
