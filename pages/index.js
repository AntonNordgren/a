import CardContent from '../components/TopicContent'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {

  const imgStyle = {
    maxHeight: "500px"
  }

  return (
    <Container fluid>

      <h2>Leter du efter nya herrskor?</h2>
      <p>På denna episka sida kan du få inspiration från några av Sveriges grymmaste skoaffärer!</p>

      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.pinimg.com/originals/e4/f3/49/e4f3495c5c2568da3f18131488305ef0.jpg"
            alt="First slide"
            style={imgStyle}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.pinimg.com/originals/3d/7d/cd/3d7dcd18bc75ceef1cf63b23d4dc61b0.jpg"
            alt="Third slide"
            style={imgStyle}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
             className="d-block w-100 h-100"
            src="https://previews.123rf.com/images/siwarit01/siwarit011603/siwarit01160300014/55073303-men-fashion-brown-leather-boots.jpg"
            alt="Third slide"
            style={imgStyle}
          />
        </Carousel.Item>
      </Carousel> */}

    </Container>
  )
}
