import { useState } from 'react'

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
      key={ nav.name }
      title={ nav.name }
      show={ show }
      id=""
      onClick={ toggleDropdown }
      onMouseEnter={ showDropdown }
      onMouseLeave={ hideDropdown }
      className={ show ? 'custom-dropdown-toggle-on' : 'custom-dropdown-toggle-off' }
    >
      <div className="dropdown-helper" />
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
