import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './components/Footer'
import Menu from './components/Menu'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
