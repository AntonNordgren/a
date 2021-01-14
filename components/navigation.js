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
      <Dropdown>
        <Dropdown.Toggle className="dropdown-button">
          Produkter
        </Dropdown.Toggle>
        <Dropdown.Menu style={style}>
          <Dropdown.Item>
            <Link href="/produkter/tv">
              <a>TV</a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/produkter/godis">
              <a>Godis</a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/produkter/skor">
              <a>Skor</a>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  )
}
