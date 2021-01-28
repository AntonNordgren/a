import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function TopicContent({ data }) {

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          {
            data.map(shoe => (
              <Col className="p-2" xs={12} md={6} lg={4}>
                <Card style={{ borderRadius: "0px", border: "1 solid grey",  borderRadius: "0px" }}>
                  <Card.Img variant="top" style={{ margin: "auto", padding: "0px", borderRadius: "0px", width: "100%", height: "320px", objectFit: "cover" }} src={shoe.img} />
                  <Card.Body>
                    <Card.Title><h4>{shoe.name}</h4></Card.Title>
                    <Card.Text>
                      {shoe.text}
                    </Card.Text>
                    <Button variant="secondary" style={{ borderRadius: "0px"}}>Köp här!</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}
