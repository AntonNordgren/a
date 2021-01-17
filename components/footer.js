import Navbar from 'react-bootstrap/Navbar'

export default function Footer() {
  const style = {
    backgroundColor: "#343a40",
    height: "80px",
  }

  return (
    <Navbar className="p-0 m-0" style={style}></Navbar>
  )
}