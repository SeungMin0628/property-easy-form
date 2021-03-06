import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ElementType } from 'react'
import '@/styles/globals.css'

const App: ElementType = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
)

export default App
