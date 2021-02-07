import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Link from 'next/link'

export default function Navigation() {

  const [show, setShow] = useState(false)

  const showDropdown = e => {
    if(window.innerWidth >= 763) {
      setShow(!show);
    }
  }

  const hideDropdown = e => {
    if(window.innerWidth >= 763) {
      setShow(false);
    }
  }

  const toogleDropdown = e => {
    if(window.innerWidth <= 763) {
      if(show === false) setShow(!show)
      else setShow(false)
    }
  }

  const navs = [
    {
      name: "Mekaniska",
      dropdown:
        [
          {
            name: "Linjära",
            link: "/mekaniska/linjara"
          },
          {
            name: "Taktila",
            link: "/mekaniska/taktila"
          },
          {
            name: "Klickiga",
            link: "/mekaniska/klickiga"
          }
        ]
    },
    {
      name: "Membran",
      link: "/membran"
    },
    {
      name: "Trådlösa",
      link: "/tradlosa"
    },
    {
      name: "Bluetooth",
      link: "/bluetooth"
    },
    {
      name: "Ergonomiska",
      link: "/ergonomiska"
    },
  ]

  const navLinks = (
    navs.map(nav => {
      if (!nav.hasOwnProperty('dropdown')) {
        return (
          <Link href={nav.link}>
            <a className="navigation-link">{nav.name}</a>
          </Link>
        )
      }

      return (
        <NavDropdown id="navbar-dropdown" title="Mekaniska" style={{ fontSize: "1.5em" }} show={ show } onClick={ toogleDropdown } onMouseEnter={ showDropdown } onMouseLeave={ hideDropdown }>
          { nav.dropdown.map(dropdownItem => <NavDropdown.Item as="Link" href={dropdownItem.link}>{dropdownItem.name}</NavDropdown.Item> ) }
        </NavDropdown>
      )
    })
  )

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" style={{ padding: "5px" }}>
      <Navbar.Brand className="navbrand">
        <Link href="/">
          <img className="navbrand" src="/TG_turkos.png" width="50px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">{navLinks}</Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
