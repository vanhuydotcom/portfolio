import '../styles/globals.scss'
import type { AppProps } from 'next/app'

/**
 *  Component
 */
import MainLayOut from '../components/mainLayOut'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayOut>
      <Component {...pageProps} />
    </MainLayOut>
  )
}

export default MyApp
