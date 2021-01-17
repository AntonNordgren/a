import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function TopicContent({ data }) {

  return (
    <Container>
      <Row>
        {
          data.map(shoe => (
            <Col className="p-2" xs={12} sm={6} md={4} lg={3}>
              <Card style={{ borderRadius: "0px", border: "none", boxShadow: "gray 5px 5px 10px", borderRadius: "0px" }}>
                <Card.Img variant="top" style={{ margin: "auto", padding: "0px", borderRadius: "0px", width: "100%", maxHeight: "260px", objectFit: "cover" }} src={shoe.img} />
                <Card.Body>
                  <Card.Title><h3>{shoe.name}</h3></Card.Title>
                  <Card.Text>
                    {shoe.text}
                  </Card.Text>
                  <Button variant="primary">Köp här!</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}
