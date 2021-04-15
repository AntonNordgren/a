import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import TopicContent from '../components/TopicContent'

export default function page({ pageTitle, itemList, textList, cardInfoList }) {
  return (
    <div>
      <h1 className="m-2" style={{ textAlign: "center", fontFamily: 'Teko, sans-serif', fontSize: "3em", top: "5px", position: "relative" }}>{pageTitle}</h1>
      <TopicContent data={itemList} />
      <Card className="mb-2" style={{ borderRadius: "0px", border: "none", borderRadius: "0px", backgroundColor: "white" }}>
        <Container fluid className="p-4">
          {textList.map(x => (
            <div>
              <h3>{x.header}</h3>
              {x.textParagraphs.map(p => <p>{p}</p>)}
            </div>
          ))}
        </Container>
      </Card>
    </div>
  )
}