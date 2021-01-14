import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Tv() {
  return (
    <Container fluid >
      <Row>
        <Col className="p-4">
          <Card style={{borderRadius: "2px", boxShadow: "gray 7px 7px 5px"}}>
            <Card.Img variant="top" style={{width: "80%", margin: "auto", padding: "0px"}} src="https://images.samsung.com/is/image/samsung/se-uhdtv-nu6025-ue50nu6025kxxc-frontblack-113204239?$720_576_PNG$" />
            <Card.Body>
              <Card.Title><h3>Card Title</h3></Card.Title>
              <Card.Text>
                Awesome tv!
                </Card.Text>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="p-4">
          <Card style={{borderRadius: "2px", boxShadow: "gray 7px 7px 5px"}}>
            <Card.Img variant="top" style={{width: "80%", margin: "auto", padding: "0px"}} src="https://images.samsung.com/is/image/samsung/se-uhdtv-nu6025-ue50nu6025kxxc-frontblack-113204239?$720_576_PNG$" />
            <Card.Body>
              <Card.Title><h3>Card Title</h3></Card.Title>
              <Card.Text>
                Awesome tv!
                </Card.Text>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="p-4">
          <Card style={{borderRadius: "2px", boxShadow: "gray 7px 7px 5px"}}>
            <Card.Img variant="top" style={{width: "80%", margin: "auto", padding: "0px"}} src="https://images.samsung.com/is/image/samsung/se-uhdtv-nu6025-ue50nu6025kxxc-frontblack-113204239?$720_576_PNG$" />
            <Card.Body>
              <Card.Title><h3>Card Title</h3></Card.Title>
              <Card.Text>
                Awesome tv!
                </Card.Text>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        {/* <Card>
          <Card.Img variant="top" src="https://www.bilparken.se/img/varabilar_infobox.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some Text about Cool Car
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://3.bp.blogspot.com/-RLmwTFngqIc/Wkvz2XrK3qI/AAAAAAAAD9A/Ni5xWXfXk4sRe4DCt76ZZribfrSTgTmSwCLcBGAs/s1600/fullsizeoutput_40b.jpeg" />
          <Card.Body>
            <Card.Title>Harry Potter Bok</Card.Title>
            <Card.Text>
              Super Cool book about Harry potter
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
      </Row> */}
      
    </Container>
  )
}
