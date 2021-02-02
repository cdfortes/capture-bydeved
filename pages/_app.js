import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import { GlobalStyle, theme } from '../scr/styles/GlobalStyle'

import Head from 'next/head'
import Nav from '../scr/components/Nav'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Capture | NextJS</title>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico"></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}
