import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import TopicContent from '../../components/TopicContent'

export default function Finskor() {
  const shoeList = [
    {
      name: 'Linjära',
      img: 'https://www.lenovo.com/medias/GY40Y57708-01-500x400.png?context=bWFzdGVyfHJvb3R8MTE0NTYxfGltYWdlL3BuZ3xoMmEvaDg5LzExMDQ1MTIwNTA3OTM0LnBuZ3xlZDFkNmMyOTc3YTY5NzAxOWU0ZmM0NDZkMTAyZDQxNjdjNjUyZGUzNmZlNmRlNTc0MzVhM2I1YjBkOTE4M2I2',
      text: 'Linjära brytare'
    },
    {
      name: 'Linjära',
      img: 'https://www.lenovo.com/medias/GY40Y57708-01-500x400.png?context=bWFzdGVyfHJvb3R8MTE0NTYxfGltYWdlL3BuZ3xoMmEvaDg5LzExMDQ1MTIwNTA3OTM0LnBuZ3xlZDFkNmMyOTc3YTY5NzAxOWU0ZmM0NDZkMTAyZDQxNjdjNjUyZGUzNmZlNmRlNTc0MzVhM2I1YjBkOTE4M2I2',
      text: 'Linjära brytare'
    },
  ]
  return (
    <div>
      <TopicContent data={shoeList} />
      {/* <h1 className="m-2" style={{textAlign: "center"}}>Gasolkylskåp - Best i Test</h1>
      <Card className="mb-2" style={{ borderRadius: "0px", border: "none", borderRadius: "0px" }}>
        <Container fluid className="p-4">
          <h2>Gasolkylskåp</h2>

          <p>Är du på jakt efter ett gasolkylskåp har du hittat rätt. På grund av att du slipper elektricitet lämpar sig denna kylskåpsvariant till husvagn, båten, fritidshus, gästhus och attefallshus. Genom den batteridrivna innerbeslysningen ser du alla varor trots att det alltså drivs av gasol. Dessutom rymmer gasolkylskåp upp till 250 liter, vilket är perfekt för en hel familj under en längre tids semester. Däremot är det 100 liters-storleken som säljs bäst. Oavsett om du behöver en liten eller stor modell har vi det du letar efter. Baserat på att utbudet blir allt större har vi förenklat ditt val genom att ranka de bästa varianterna i en bäst-i-test lista. Dessutom har vi skrivit en komplett köpguide över vad du ska tänka på innan du köper ett gasolkylskåp. Börja med att lära dig mer om ämnet nedan, för att därefter sondera i topplistan.</p>

          <ul className="pl-4">
            <li>1 Sunwind Ventus 225</li>
            <li>2 Sunwind Ventus 225 liter</li>
          </ul>

          <h4>Så väljer du gasolkylskåp</h4>

          <p>
            Innan du köper ett gasolkylskåp är det ytterst viktigt att du har koll på några saker. För det första måste du veta att gasolförbrukningen skiftar från modell till modell. Därmed också dina utgifter på lång sikt. För det andra ska du välja rätt storlek – inte för litet och inte för stort. Förutom nämnda faktorer ska du tänka på följande innan du genomför din beställning.
        </p>

          <ol className="pl-4">
            <li>Gasolförbrukning</li>
            <p>
              Du vill inte ha ett gasolkylskåp med hög gasolförbränning då det är ofördelaktigt ur en ekonomisk synvinkel. Tvärtom ska gasolförbrukningen vara så låg som möjligt, företrädesvis max 30 gram/timme. Därför ska du hålla ett getöga på denna faktorn lite extra så du inte spenderar mer pengar än du behöver.
          </p>
            <li>Utrymme</li>
          Vi rekommenderar att välja ett gasolkylskåp vars kapacitet inte understiger 60 liter. Orsaken är att allt under denna gräns är för litet för mer än en person. Således är det mycket bättre om du från början köper en större variant så du har mer plats och kan ha framförhållning för planerade maträtter.
          <li>Pris</li>
          Ett gasolkylskåp kostar mellan 3 000 – 15 000 kr och priset bestäms primärt av storlek och gasolförbrukning. Tänk på att välja en låg gasolförbrukning, då du tjänar pengar på lång sikt, istället för en billigare modell som kostar skjortan av gasolen som går åt.
          <li>Justerbar temperatur</li>
            <p>
              Temperaturen i kylskåpet måste vara justerbar för att kunna anpassas efter dina behov. Till exempel behöver grönsaker en lägre temperatur än kött, och kan du inte justera detta kommer inte matvarorna hålla lika länge. Därjämte kan du kontrollera temperaturen i frysfacket om du väljer en sådan modell.
          </p>
            <li>Frysfack</li>
            <p>
              Vill du ha möjligheten att frysa in varor ska du absolut fundera över om ett gasolkylskåp med frysfack passar dig bäst. Frys in kött, fågel eller fisk och planera maträtter veckor i förtid. Dock ska du vara medveten om att priset drastiskt skjuter i höjden så fort du väljer till ett frysfack. Därför ska du noggrant fundera om du verkligen behöver det.
          </p>
            <li>Tillverkare</li>
            <p>
              Genom att välja rätt tillverkare får du alltid bäst tekniska komponenter, lägst kostnad samt garanti. Exempel på de bästa varumärkena för gasolkylskåp är Dometic och Sunwind, väljer du något av dessa får du per definition excellent kvalitet.
          </p>
            <li>Gasvarnare</li>
            <p>
              För att vara på den säkra sidan rekommenderar vi att köpa en gasvarnare. Det är en produkt som varnar dig om gas skulle läcka ut i rummet. På grund av att gasol är luktfri så är detta ett måste för att upptäcka läckage. Däremot kan du tillsätta ett luktämne som kallas etylmerkaptan för att lukten ska tydliggöras, men det är inget vi rekommenderar.
          </p>
          </ol>

          <h4>Gasolkylskåp till husbil</h4>

          <p>När du ska välja ett gasolkylskåp till husbil är det främst volymen du ska ha i beaktande. Börja med att fundera på hur många ni vanligtvis är på husbilssemestern och hur mycket ni tenderar att kyla och frysa ner. Därefter kan du avläsa hur stor volym ni behöver beroende på antalet personer. Dock måste du som sagt hålla en bra balans mellan storleken och kostnaden, d.v.s. välj hellre än större och billigare modell än en mindre och dyrare. Vidare finns det möjlighet att ansluta till el på campinplatser, varför du också ska fundera över att välja en hybridlösning för både el och gas. På så sätt kan du hålla maten fräschare längre utan att gasolkostnaderna blir för höga.</p>

          <Table bordered>
            <thead>
              <tr>
                <th>Volym</th>
                <th>Antal Personer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50-65 liter</td>
                <td>1-2 personer</td>

              </tr>
              <tr>
                <td>100 liter</td>
                <td>3-4 personer</td>

              </tr>
              <tr>
                <td>150 liter</td>
                <td>4-7 personer</td>
              </tr>
            </tbody>
          </Table>

          <h4>Gasolkylskåp med el</h4>

          <p>
            Tänk på att majoriteten av gasolkylskåp går att drivas med elektricitet precis som ett vanligt kylskåp. Trots att gasol är energisnålt, kan du alltså varva mellan el och gasol om du vill, men då måste du givetvis ha ett eluttag i nära anslutning.
            Fördelar med gasolkylskåp
        </p>

          <p>
            Gasol är billigt – Ett gasoldrivet kylskåp är väldigt mycket billigare i längden än ett eldrivet. Dessutom består gasolen i Sverige av hela 95% propan vilket gör det ännu billigare.
            Lång livslängd – De flesta gasolkylskåp kan utan problem användas i tiotals år utan att underhåll krävs. Därmed är de en av få vitvaror som har en enormt lång livslängd.
            Smidigt – Perfekt för dig som har en liten stuga eller husbil och snabbt behöver köpa ett billigare kylskåp som enkelt kan kylas ner. Därtill är det lätt att flytta runt.
            Tysta – I dagens läge är de flesta gasolkylskåp i princip ljudlösa. Med andra ord hör du inte ens suset på natten vilket är otroligt skönt.
            Hållbart material – Tack vare att de är tillverkade i freonfria material påverkar de inte miljön negativt. Således kan du köpa det med gott samvete.
        </p>
        </Container>
      </Card> */}
    </div>
  )
}
