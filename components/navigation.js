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
            <a className="navigation-link pl-3">{nav.name}</a>
          </Link>
        )
      }

      return (
        <NavDropdown id="navbar-dropdown" title={nav.name} style={{ backgroundColor: "#1f2833", fontSize: "1.5em", marginTop: "-8px", marginRight: "-5px", borderRadius: "0px", zIndex: "1" }} show={ show } onClick={ toogleDropdown } onMouseEnter={ showDropdown } onMouseLeave={ hideDropdown }>
          {/* <div style={{height: "10px"}}></div> */}
          {
            nav.dropdown.map(dropdownItem => (
              <Link href={dropdownItem.link}>
                <div className="dropdown-item pt-1 pb-1" style={{textAlign: "center", fontSize: "1.2em", color: "66FCF1"}}>
                  {dropdownItem.name}
                </div>
              </Link>
            ))
          }
        </NavDropdown>
      )
    })
  )

  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: "#1f2833", padding: "5px"}}>
      <div className="container">
        <Navbar.Brand className="navbrand">
          <Link href="/">
            <img className="navbrand" src="/TG_TANGENTBORDSGUIDEN.png" width="350" style={{ marginRight: "10px", position: "relative", left: "5px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ paddingTop: "10px" }}>
          <Nav className="ml-auto">{navLinks}</Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
