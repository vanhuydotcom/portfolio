import '../styles/globals.scss'
import type { AppProps } from 'next/app'

/**
 *  Component
 */
import GenericLayOut from '../components/genericLayOut'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GenericLayOut>
      <Component {...pageProps} />
    </GenericLayOut>
  )
}

export default MyApp
