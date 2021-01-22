import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import Link from 'next/link'

export default function Navigation() {

  const navs = [
    {
      name: "Linjära",
      link: "/produkter/linjara"
    },
    {
      name: "Taktila",
      link: "/produkter/taktila"
    },
    {
      name: "Klickiga",
      link: "/produkter/klickiga"
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
          <img src="/TG_logga.png" width="40px" />
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
