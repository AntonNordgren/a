import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import Link from 'next/link'

export default function Navigation() {

  const style = {
    borderRadius: "0px",
    border: "none"
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <img src="/testLogo.png" width="50px" height="50px" />
        </Link>
      </Navbar.Brand>

      <Link href="/produkter/finskor">
        <a style={{marginRight: "10px"}}>Finskor</a>
      </Link>

      <Link href="/produkter/boots">
        <a style={{marginRight: "10px"}}>Boots</a>
      </Link>

      <Link href="/produkter/sneakers">
        <a style={{marginRight: "10px"}}>Sneakers</a>
      </Link>



    </Navbar>
  )
}
