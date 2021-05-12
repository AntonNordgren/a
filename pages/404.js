export default function Custom404() {
  return (
    <div className="404-page" style={{ textAlign: "center" }}>
      {/* <h2 style={{ textAlign: "center", fontSize: "65px", position: "relative", top: "10px" }}>Sidan du söker finns inte</h2>
      <h1 style={{ textAlign: "center", fontSize: "50px", position: "relative", top: "10px" }}>Felkod 404</h1>
      <img style={{ position: "absolute", top: "100px", maxWidth: "700px" }} src="/404_tangent.png" /> */}
      <object data="/404_felkod.svg" type="image/svg+xml" style={{ maxWidth: "80%", position: "relative", top: "50px" }}></object>
    </div>
  )
}