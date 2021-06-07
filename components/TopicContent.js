import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default function TopicContent({ data }) {
  return (
    <div>
      <Container>
        <Row className="justify-content-left" style={{marginLeft: "-19px", marginRight: "-19px"}}>
          {
            data.map(product => (
              <Col className="pt-2 pb-2 pl-1 pr-1 m-0" xs={12} md={6} lg={4}>
                <Card style={{ border: "1 solid grey",  borderRadius: "0px", height: "500px", overflow: "hidden", border: "solid 1px #1f283370" }}>
                  <div style={{ display: "flex", height: "250px" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="p-1">
                      <Card.Img style={{padding: "15px"}} src={product.img} />
                    </div>
                  </div>
                  <Card.Body className="p-3">
  
                    <h4 className="p-0 mb-2">{product.name}</h4>

                    <Card.Text>
                      <h6 className="m-0">{product.text}</h6>
                      <ul style={{position: "relative", left: "0px", paddingLeft: "15px", margin: "0px", top: "10px", fontSize: "15px"}}>
                        { product.details.map( detail => <li>{ detail }</li> ) }
                      </ul>
                    </Card.Text>

                    <div style={{ position: "relative", height: "60px" }}>
                      <Button style={{ position: "absolute", marginLeft: "calc(50% - 75px)", marginRight: "calc(50% - 75px)", width: "150px",
                      fontSize: "1.2em", top: "15px", backgroundColor: "#1f2833", border: "none", color: "#66Fcf1", fontWeight: "bold", borderRadius: "0px" }}>LÄS MER</Button>
                    </div>


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
