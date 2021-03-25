import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import CustomDropDown from './CustomDropDown'
import Link from 'next/link'

export default function Navigation() {

  const [show, setShow] = useState(false)

  function toggleDropdown() {
    if (show === false) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }

  const navs = [
    {
      name: "GUIDER",
      dropdown:
        [
          {
            name: "RENGÖRING",
            link: "/guider/rengoring"
          },
        ]
    },
    {
      name: "MEKANISKA",
      dropdown:
        [
          {
            name: "LINJÄRA",
            link: "/mekaniska/linjara"
          },
          {
            name: "TAKTILA",
            link: "/mekaniska/taktila"
          },
          {
            name: "KLICKIGA",
            link: "/mekaniska/klickiga"
          }
        ]
    },
    {
      name: "MEMBRAN",
      link: "/membran"
    },
    {
      name: "TRÅDLÖSA",
      link: "/tradlosa"
    },
    {
      name: "BLUETOOTH",
      link: "/bluetooth"
    },
    {
      name: "ERGONOMISKA",
      link: "/ergonomiska"
    },
  ]

  const navLinks = (
    navs.map(nav => {
      if (!nav.hasOwnProperty('dropdown')) {
        return (
          <div className="navigation-link navigation-link-normal" onClick={() => toggleDropdown()}>
            <Link href={nav.link} key={nav.name}>
              <div className="navigation-link-normal-container">
                {nav.name}
              </div>
            </Link>
          </div>
        )
      }

      return (
        <div className="navigation-link navigation-link-dropdown">
          <CustomDropDown nav={nav} toggleDropdownFunction={toggleDropdown} />
        </div>
      )
    })
  )

  function renderDropdown() {

    const result = show ? 'customDropdown dropDownShow' : 'customDropdown dropDownHide'

    return (
      <div className={result}>

        <div className="dropdown-header">

          <svg className="dropdownIcon" onClick={() => toggleDropdown()} xmlns="http://www.w3.org/2000/svg"
            width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>

        <div className="dropdown-navContainer">
          {navLinks}
        </div>

        <img className="dropdown-logo" src="/TG_TANGENTBORDSGUIDEN.png"></img>
      </div>
    )
  }

  return (
    <Navbar expand="lg" className="nav-main">
      <div className="container navbar-container">

        <Navbar.Brand className="navbrand">
          <Link href="/">
            <img className="navbrand" src="/TG_TANGENTBORDSGUIDEN.png" />
          </Link>
        </Navbar.Brand>

        <svg id="listIcon" className="dropdownIcon" onClick={() => toggleDropdown()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#66Fcf1" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>

        { renderDropdown() }

      </div>
    </Navbar>
  )
}
