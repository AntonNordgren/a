import Navbar from 'react-bootstrap/Navbar'

export default function Footer() {
  const style = {
    backgroundColor: "#343a40",
    height: "80px",
    color: "#ffffff5d",
    textAlign: "center"
  }

  return (
    <Navbar className="p-0 m-0" style={style}>
      <div style={{width: "100%"}}>
        <h6>Män i Skor</h6>
      </div>
    </Navbar>
  )
}