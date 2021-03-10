import { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Link from 'next/link'

export default function CustomDropDown({ nav, toggleDropdownFunction }) {

  const [show, setShow] = useState(false)

  const showDropdown = e => {
    if(window.innerWidth >= 992) {
      setShow(!show);
    }
  }

  const hideDropdown = e => {
    if(window.innerWidth >= 992) {
      setShow(false);
    }
  }

  const toggleDropdown = e => {
    if(window.innerWidth <= 992) {
      if(show === false) setShow(!show)
      else setShow(false)
    }
  }

  return (
    <NavDropdown
      key={nav.name}
      title={nav.name}

      show={show}

      id=""
      className=""

      onClick={toggleDropdown}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <div className="dropdown-helper"></div>
      {
        nav.dropdown.map(dropdownItem => (
          <Link href={dropdownItem.link} key={dropdownItem.name}>
            <div className="dropdown-item" onClick={() => toggleDropdownFunction()}>
              {dropdownItem.name}
            </div>
          </Link>
        ))
      }
    </NavDropdown>
  )
}
