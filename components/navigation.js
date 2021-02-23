import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import CustomDropDown from './CustomDropDown'

import Link from 'next/link'

export default function Navigation() {

  const navs = [
    {
      name: "Guider",
      dropdown:
        [
          {
            name: "Rengöring",
            link: "/guider/rengoring"
          },
        ]
    },
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
          <div className="navigation-link">
            <Link href={nav.link} key={nav.name}>
              <a className="navigation-link pl-3">{nav.name}</a>
            </Link>
          </div>
        )
      }

      return (
        <CustomDropDown nav={nav} />
      )
    })
  )

  return (
    <Navbar collapseOnSelect expand="lg" className="nav-main">
      <div className="container navbar-container">
        <Navbar.Brand className="navbrand">
          <Link href="/">
            <img
              className="navbrand"
              src="/TG_TANGENTBORDSGUIDEN.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse sticky="bottom">
          <Nav className="ml-auto">
            { navLinks }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
