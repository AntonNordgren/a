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
        <img src="tangentbordsguiden.png" style={{width: "100%"}}/>
        <h1 style={{marginTop: "20px"}}>Under konstruktion</h1>
      </div>
    </Container>
  )
}
