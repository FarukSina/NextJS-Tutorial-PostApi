import '../styles/globals.css'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import { Router } from 'next/dist/client/router'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center', alignItems: 'center' }}>
        Welcome to my App
      </h1>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
