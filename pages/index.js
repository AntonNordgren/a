import CardContent from '../components/TopicContent'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {

  const imgStyle = {
    maxHeight: "500px"
  }

  return (
    <Container>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img src="/TG_Tangentbordsguiden_MB.png" style={{ width: "100%" }} />

        <h1>Under Utveckling</h1>

        <Carousel controls={false} interval={3000} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/r/z/rz03-03390200-razer-huntsman-mini-gaming-keyboard.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://venturebeat.com/wp-content/uploads/2020/05/logitech-2.jpg?w=1200&strip=all"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/I/71ZLaIN981L._AC_SL1500_.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  )
}
