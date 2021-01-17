import Navigation from './navigation'
import Footer from './footer'

import Container from 'react-bootstrap/Container'

export default function Layout({ children }) {

  const pageStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "calc(100vh - 155px)",
    marginTop: "75px"
  }

  const contentStyle = {
    backgroundColor: "#f2f3f4"
  }

  return (
    <div>
      <Navigation />
      <Container style={pageStyle}>
        {children}
      </Container>
      <Footer />
    </div>
  )
}
