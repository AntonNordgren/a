import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function TopicContent({ data }) {
  return (
    <div>
      <Container>
        <Row className="justify-content-left">
          {
            data.map(product => (
              <Col className="pt-2 pb-2 pl-1 pr-1 m-0" xs={12} md={6} lg={4}>
                <Card style={{ borderRadius: "0px", border: "1 solid grey",  borderRadius: "0px", height: "500px" }}>
                  <div style={{ display: "flex", height: "70%" }}>
                    <div style={{ display: "flex", justifContent: "center", alignItems: "center" }}>
                      <Card.Img style={{padding: "15px"}} src={product.img} />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title><h4>{product.name}</h4></Card.Title>
                    <Card.Text>
                      {product.text}
                    </Card.Text>
                    <Button variant="secondary" style={{ borderRadius: "0px"}}>Läs mer här!</Button>
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
