import '../styles/index.css'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import { AppProps } from 'next/app'
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>NextJs PWA GraphQL & Tailwind</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="./favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="./favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      {router.pathname !== '/' && <Navbar />}

      <Component {...pageProps} />
    </div>
  )
}
