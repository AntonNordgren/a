import Navbar from 'react-bootstrap/Navbar'

export default function Footer() {

  function topFunction() {
    window.document.body.scrollTop = 0
    window.document.documentElement.scrollTop = 0
  }

  return (
    <Navbar className="p-0 m-0 footer">
      <div className="footer-logo-wrapper" onClick={ () => topFunction() }>
        <object style={{ pointerEvents: "none" }} data="/TG_Turkos.svg" type="image/svg+xml" width="250px" />
      </div>
    </Navbar>
  )
} 