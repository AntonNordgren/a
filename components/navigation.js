import Navbar from 'react-bootstrap/Navbar'

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
        <div className="dropdown-nav" style={{ height: "53px" }}>
          <div>
            <a style={{ position: "relative", top: "8px" }} className="navigation-link">Mekaniska</a>
            <div className="dropdown-menu"
              style={{ position: "absolute", width: "150px", height: "150px", top: "60px", backgroundColor: "#1f2833", color: "white", borderRadius: "0px", border: "none" }}>
              <div style={{ height: "10px" }} />
              {
                nav.dropdown.map(dropdownItem => (
                  <div style={{ textAlign: "center", marginTop: "5px", marginBottom: "5px" }}>
                    <Link href={dropdownItem.link}>
                      <a className="navigation-link">{dropdownItem.name}</a>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )

    }
    )
)

  return (
    <Navbar style={{padding: "0px", backgroundColor: "#1f2833"}} fixed="top">
      <Navbar.Brand className="navbrand">
        <Link href="/">
          <img className="navbrand" src="/TG_turkos.png" width="50px" />
        </Link>
      </Navbar.Brand>
      { navLinks }
    </Navbar>
  )
}
