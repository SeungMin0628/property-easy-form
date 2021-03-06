import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ElementType } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/theme'

const App: ElementType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Property easy form</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
