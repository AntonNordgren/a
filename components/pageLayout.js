import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import TopicContent from '../components/TopicContent'

export default function page({ pageTitle, itemList, textList, introText }) {
  return (
    <div style={{position: "relative", top: "40px"}}>
      <h1 className="m-2" style={{
        textAlign: "left",
        fontFamily: 'Teko, sans-serif',
        fontSize: "4em",
        top: "25px",
        position: "relative",
        left: "-10px"
      }}>{pageTitle}</h1>
      <p style={{ textAlign: "left", fontSize: "1.3em", marginTop: "40px" }}>{introText}</p>
      <TopicContent data={itemList} />
      <Container fluid className="p-0">
        {textList.map(x => (
          <div style={{marginBottom: "80px"}}>
            <div>
              <h2 style={{ textAlign: "left", position: "relative", marginBottom: "20px", marginTop: "15px", "fontFamily": "Teko, sans-serif" }}>{x.header}</h2>
            </div>
            { x.textParagraphs.map(p => <p>{p}</p>)}
          </div>
        ))}
      </Container>
    </div>
  )
}