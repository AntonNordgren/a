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
        <img src="/tangent_vit.png" width="200px"></img>
      </div>
    </Navbar>
  )
}