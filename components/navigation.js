import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import Link from 'next/link'

export default function Navigation() {

  const navs = [
    {
      name: "Finskor",
      link: "/produkter/finskor"
    },
    {
      name: "Boots",
      link: "/produkter/boots"
    },
    {
      name: "Sneakers",
      link: "/produkter/sneakers"
    },
  ]

  const linkStyle = {

    marginRight: "10px",
    color: "#8a8383",
    textDecoration: "none"

}

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>
        <Link href="/">
          <img src="/navlogo.png" width="90px" height="50px" />
        </Link>
      </Navbar.Brand>
      {
        navs.map(nav => (
          <Link href={nav.link}>
            <a className="navigation-link">{nav.name}</a>
          </Link>
        ))
      }
    </Navbar>
  )
}
