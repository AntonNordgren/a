import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Link from 'next/link'

export default function CustomDropDown({ nav }) {

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

  return(
    <NavDropdown
      key={nav.name}
      title={nav.name}
      show={show}

      menuAlign="center"

      id="navbar-dropdown"

      onClick={toogleDropdown}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <div style={{height: "10px", backgroundColor: "#1f2833"}}></div>
      {
        nav.dropdown.map(dropdownItem => (
          <Link href={dropdownItem.link} key={dropdownItem.name}>
            <div className="dropdown-item">
              {dropdownItem.name}
            </div>
          </Link>
        ))
      }
    </NavDropdown>
  )
}
