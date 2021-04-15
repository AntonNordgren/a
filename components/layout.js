import Navigation from './navigation'
import Footer from './footer'

import Container from 'react-bootstrap/Container'

export default function Layout({ children }) {
  return (
    <span>
      <Navigation />
      <Container className="pageStyle">
        {children}
      </Container>
      <Footer />
    </span>
  )
}
