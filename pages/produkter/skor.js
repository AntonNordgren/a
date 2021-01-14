import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Skor() {
  return (
    <Container fluid >
      <Row>
        <Col className="p-4">
          <Card style={{borderRadius: "2px", boxShadow: "gray 7px 7px 5px"}}>
            <Card.Img variant="top" style={{width: "80%", margin: "auto", padding: "0px"}} src="https://static.eventyrsport.se/media/catalog/product/cache/image/564x564/e9c3970ab036de70892d86c6d221abfe/s/t/steens_wp_1022331_flr-large_canteen_brindle.jpg" />
            <Card.Body>
              <Card.Title><h3>Skor</h3></Card.Title>
              <Card.Text>
                Daddyshoes
                </Card.Text>
              <Button variant="primary">Köp nu!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="p-4">
          <Card style={{borderRadius: "2px", boxShadow: "gray 7px 7px 5px"}}>
            <Card.Img variant="top" style={{width: "80%", margin: "auto", padding: "0px"}} src="https://static.eventyrsport.se/media/catalog/product/cache/image/564x564/e9c3970ab036de70892d86c6d221abfe/s/t/steens_wp_1022331_flr-large_canteen_brindle.jpg" />
            <Card.Body>
              <Card.Title><h3>Skor</h3></Card.Title>
              <Card.Text>
                Daddyshoes
                </Card.Text>
              <Button variant="primary">Köp nu!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  )
}
