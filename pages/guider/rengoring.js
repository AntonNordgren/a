import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import TopicContent from '../../components/TopicContent'

export default function Sneakers() {
  const shoeList = [
    {
      name: 'Rengöring',
      img: '',
      text: 'Rengöring'
    },
    {
      name: 'Rengöring',
      img: '',
      text: 'Rengöring'
    },
    {
      name: 'Rengöring',
      img: '',
      text: 'Rengöring'
    },
  ]
  return (
    <div>
      <h1 className="m-2" style={{textAlign: "center"}}>Rengöring</h1>
      <TopicContent data={shoeList}/>
        <Card className="mb-2" style={{ borderRadius: "0px", border: "none", borderRadius: "0px", backgroundColor: "white" }}>
          <Container fluid className="p-4">

          {/* Att rengöra sitt tangentbord: */}
          <p>
            Alla tangentbord bör rengöras regelbundet. Att ett tangentbord hålls rent och fräscht handlar inte bara om den hygieniska aspekten, utan också på funktionaliteten.
            Damm och smuts fastnar mellan tangenterna och det kan orsaka problem. Regelbunden rengöring, åtminstone en gång per år, är att rekommendera då det förlänger tangentbordets livslängd. 
          </p>
          <p>
            Det finns olika sätt att rengöra ett tangentbord, men hur gör man det på ett säkert sätt?
            Beroende på hur smutsigt tangentbordet är kan städningen kräva mer eller mindre tid.
            Om tangentbordet är smått dammigt krävs det bara att ha en fiberduk som man fuktat med lite vatten.
            Det går även bra men den dammvippa som suger upp dammet. Är tangentbordet smutsigt och har gamla rester samt damm under tangentknapparna behöver man rengöra på djupet.
          </p>
          <p>
            För att rengöra på djupet krävs det att man kopplar loss varje tangent från bordet för att sedan tvätta rent grundligt.
            För att rengöra varje tangent kan man lägga samtliga i en skål med varmt vatten blandat med grönsåpa.
            Nästa steg är att tvätta och torka varje tangent var för sig.
            Innan man sätter tillbaka tangenterna ska man ha städat rent bordet först. Detta är betydligt mer tidskrävande, men ger ett fantastiskt resultat.
          </p>

          </Container>
        </Card>

    </div>
  )
}