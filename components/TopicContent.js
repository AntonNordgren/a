
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function TopicContent({ data }) {

  return (
    <Container fluid>
      {
        data.map(shoe => (
          <Row>
            <Col className="p-4">
              <Card style={{ borderRadius: "2px", boxShadow: "gray 7px 7px 5px" }}>
                <Card.Img variant="top" style={{ margin: "auto", padding: "0px" }} src={shoe.img} />
                <Card.Body>
                  <Card.Title><h3>{shoe.name}</h3></Card.Title>
                  <Card.Text>
                    {shoe.text}
                </Card.Text>
                  <Button variant="primary">Köp här!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      }
    </Container>
  )
}
