import Navigation from './navigation'
import Footer from './footer'

export default function Layout({ children }) {

  const pageStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: "100vh"
  }

  const contentStyle = {
    backgroundColor: "#f2f3f4"
  }

  return (
    <div style={pageStyle}>
      <Navigation />
        <div style={contentStyle}>
          {children}
        </div>
      <Footer />
    </div>
  )
}
