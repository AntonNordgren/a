import Navigation from './navigation'
import Footer from './footer'

import Container from 'react-bootstrap/Container'

export default function Layout({ children }) {

  // const pageStyle = {
  //   display: "grid",
  //   gridTemplateRows: "auto 1fr auto",
  //   minHeight: "calc(100vh - 155px)",
  //   fontFamily: "Slabo 27px serif",
  // }

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
