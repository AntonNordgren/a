import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import CustomDropDown from './CustomDropDown'

import Link from 'next/link'

export default function Navigation() {

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
  ]

  const navLinks = (
    navs.map(nav => {
      if (!nav.hasOwnProperty('dropdown')) {
        return (
          <Link href={nav.link} key={nav.name}>
            <a className="navigation-link pl-3">{nav.name}</a>
          </Link>
        )
      }

      return (
        <CustomDropDown nav={nav} />
      )
    })
  )

  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: "#1f2833"}}>
      <div className="container">
        <Navbar.Brand className="navbrand">
          <Link href="/">
            <img
              className="navbrand" src="/TG_TANGENTBORDSGUIDEN.png"
              width="300"
              style={{ marginRight: "10px", position: "relative", left: "5px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ paddingTop: "10px" }}>
          <Nav className="ml-auto">
            { navLinks }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
