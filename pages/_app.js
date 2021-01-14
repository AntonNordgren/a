import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css'

import Container from 'react-bootstrap/Container'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Container className="p-0" expand="md">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  )
}

export default MyApp
