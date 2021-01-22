import CardContent from '../components/TopicContent'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {

  const imgStyle = {
    maxHeight: "500px"
  }

  return (
    <Container>
      <div style={{textAlign: "center", marginTop: "20px"}}>
        <img src="tg_stor_svart.png" width="500px" />
        <h1 style={{marginTop: "20px"}}>Under konstruktion</h1>
      </div>
    </Container>
  )
}
