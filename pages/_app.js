import '../styles/globals.css'
import '../styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'

import Head from 'next/head'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/> 
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
