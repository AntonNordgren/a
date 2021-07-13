import CardContent from '../components/TopicContent'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {

  let products = [
    // "https://ttpremium.eu/wp-content/uploads/2019/01/KB-LVT-SSBRUS-01-pic2.png",
    "https://www.logitechg.com/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png"
  ]

  return (
    <Container>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div style={{position: "relative", top: "60px"}}>
          <object data="/TG_Guiden.svg" type="image/svg+xml" style={{ maxWidth: "65%" }}></object>
          <h1 style={{"fontFamily": "Teko, sans-serif", "position": "relative", "top": "20px", "fontSize": "3em"}}>REKOMMENDERAR</h1>
        </div>
        <Carousel controls={false} interval={1000} indicators={false}>

          {products.map(product => (
            <Carousel.Item>
              <img
                className="d-block w-75 mx-auto"
                src={product}
              />
              {/* <div className="carousel-caption" style={{color: "#1f2833"}}>
                <h5>asdjaslkdjalskdjlkajdlkjasd</h5>
                <p>aäösdjlkasjdlkjasldkjalkjdasd</p>
              </div> */}
            </Carousel.Item>
          ))}

        </Carousel>
      </div>
    </Container>
  )
}
