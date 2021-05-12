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
        <object data="/TG_Turkos.svg" type="image/svg+xml" width="250px"></object>
        {/* <object data="yours.svg" type="image/svg+xml"></object> */}
      </div>
    </Navbar>
  )
}