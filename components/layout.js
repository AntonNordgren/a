import Navigation from './navigation'
import Footer from './footer'

import Container from 'react-bootstrap/Container'

export default function Layout({ children }) {

  const pageStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh",
  }

  const contentStyle = {
    backgroundColor: "#f2f3f4"
  }

  return (
    <div>
      <Navigation />
      <Container style={pageStyle}>
        <div style={pageStyle}>
          {children}
        </div>
      </Container>
      <Footer />
    </div>
  )
}
