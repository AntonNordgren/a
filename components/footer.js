import Navbar from 'react-bootstrap/Navbar'

export default function Footer() {
  const style = {
    backgroundColor: "#1f2833",
    height: "80px",
    color: "#ffffff5d",
    textAlign: "center"
  }

  return (
    <Navbar className="p-0 m-0" style={style}>
      <div style={{width: "100%"}}>
        <img src="/TANGENTBORDSGUIDEN.svg" width="250px" />
      </div>
    </Navbar>
  )
}