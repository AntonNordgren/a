import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import TopicContent from '../components/TopicContent'

export default function Sneakers() {
  const shoeList = [
    {
      name: 'Membran',
      img: 'https://images-na.ssl-images-amazon.com/images/I/811YM2Go9GL._AC_SL1500_.jpg',
      text: 'Membran'
    },
    {
      name: 'Membran',
      img: 'https://images-na.ssl-images-amazon.com/images/I/811YM2Go9GL._AC_SL1500_.jpg',
      text: 'Membran'
    },
    {
      name: 'Membran',
      img: 'https://images-na.ssl-images-amazon.com/images/I/811YM2Go9GL._AC_SL1500_.jpg',
      text: 'Membran'
    },
  ]
  return (
    <div>
      <TopicContent data={shoeList}/>
      <h1 className="m-2" style={{textAlign: "center"}}>Lorem Ipsum</h1>
        <Card className="mb-2" style={{ borderRadius: "0px", border: "none", borderRadius: "0px", backgroundColor: "white" }}>
          <Container fluid className="p-4">
            <h2>Lorem Ipsum</h2>

            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Dignissim suspendisse in est ante in nibh mauris. Lacus laoreet non curabitur gravida arcu. Dictumst quisque sagittis purus sit. Tempor orci eu lobortis elementum. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Quam viverra orci sagittis eu. Leo vel fringilla est ullamcorper eget. Rutrum quisque non tellus orci ac. Diam ut venenatis tellus in. Donec adipiscing tristique risus nec feugiat. Tempus iaculis urna id volutpat lacus laoreet non. Senectus et netus et malesuada fames ac. In massa tempor nec feugiat nisl pretium fusce. Ut faucibus pulvinar elementum integer enim. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Massa sed elementum tempus egestas sed sed risus. Eget lorem dolor sed viverra ipsum.
              Gravida quis blandit turpis cursus in hac habitasse platea. Volutpat maecenas volutpat blandit aliquam etiam erat. Ultrices tincidunt arcu non sodales neque. Purus sit amet luctus venenatis. Consequat semper viverra nam libero justo laoreet sit. Enim neque volutpat ac tincidunt vitae semper quis lectus. Porta nibh venenatis cras sed felis eget velit. Consectetur a erat nam at lectus urna duis convallis. Varius sit amet mattis vulputate enim. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            </p>
            <h4>Lorem Ipsum</h4>
            <p>
              Facilisis volutpat est velit egestas. Molestie nunc non blandit massa enim nec dui nunc mattis. Euismod quis viverra nibh cras pulvinar. Tincidunt arcu non sodales neque sodales ut etiam sit. Egestas integer eget aliquet nibh praesent tristique magna sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Interdum velit laoreet id donec ultrices tincidunt arcu non. Ut sem viverra aliquet eget sit amet. Id faucibus nisl tincidunt eget nullam non nisi est. At volutpat diam ut venenatis tellus in metus vulputate. Nunc mi ipsum faucibus vitae. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Sit amet massa vitae tortor condimentum lacinia quis. Feugiat in fermentum posuere urna. Tortor posuere ac ut consequat. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Tempor commodo ullamcorper a lacus vestibulum sed arcu.
            </p>
            <h4>Lorem Ipsum</h4>
            <p>
              Facilisis magna etiam tempor orci eu lobortis. Eget egestas purus viverra accumsan in nisl. Ut tellus elementum sagittis vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Massa vitae tortor condimentum lacinia quis vel eros donec. Enim ut sem viverra aliquet eget sit amet tellus. Eget magna fermentum iaculis eu non diam phasellus. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Fames ac turpis egestas sed tempus urna et pharetra. Cursus in hac habitasse platea dictumst. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ornare lectus sit amet est. Eu mi bibendum neque egestas congue. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Condimentum id venenatis a condimentum vitae. Maecenas pharetra convallis posuere morbi leo urna molestie at.
              Nisi scelerisque eu ultrices vitae auctor. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Ultricies leo integer malesuada nunc vel risus commodo viverra. Vel fringilla est ullamcorper eget. Tempus egestas sed sed risus pretium quam vulputate dignissim. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Neque laoreet suspendisse interdum consectetur libero id faucibus. Diam ut venenatis tellus in metus vulputate. Dui faucibus in ornare quam viverra. Ut placerat orci nulla pellentesque. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Ut tortor pretium viverra suspendisse potenti nullam ac. Sit amet tellus cras adipiscing enim eu turpis egestas. Enim neque volutpat ac tincidunt vitae semper. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Sed id semper risus in hendrerit gravida. Orci ac auctor augue mauris. Consectetur adipiscing elit pellentesque habitant.
            </p>

            {/* <ul className="pl-4">
              <li>1 Sunwind Ventus 225</li>
              <li>2 Sunwind Ventus 225 liter</li>
            </ul> */}

            {/* <p>
              Innan du köper ett gasolkylskåp är det ytterst viktigt att du har koll på några saker. För det första måste du veta att gasolförbrukningen skiftar från modell till modell. Därmed också dina utgifter på lång sikt. För det andra ska du välja rätt storlek – inte för litet och inte för stort. Förutom nämnda faktorer ska du tänka på följande innan du genomför din beställning.
            </p> */}

            {/* <ol className="pl-4">
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
            </ol> */}

            <h4>Lorem Ipsum</h4>

            <Table bordered>
              <thead>
                <tr>
                <th>Lorem</th>
                <th>Ipsum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>

              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>

              </tr>
              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
              </tr>
            </tbody>
          </Table>

            <h4>Lorem Ipsum</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Dignissim suspendisse in est ante in nibh mauris. Lacus laoreet non curabitur gravida arcu. Dictumst quisque sagittis purus sit. Tempor orci eu lobortis elementum. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Quam viverra orci sagittis eu. Leo vel fringilla est ullamcorper eget. Rutrum quisque non tellus orci ac. Diam ut venenatis tellus in. Donec adipiscing tristique risus nec feugiat. Tempus iaculis urna id volutpat lacus laoreet non. Senectus et netus et malesuada fames ac. In massa tempor nec feugiat nisl pretium fusce. Ut faucibus pulvinar elementum integer enim. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Massa sed elementum tempus egestas sed sed risus. Eget lorem dolor sed viverra ipsum.
              Gravida quis blandit turpis cursus in hac habitasse platea. Volutpat maecenas volutpat blandit aliquam etiam erat. Ultrices tincidunt arcu non sodales neque. Purus sit amet luctus venenatis. Consequat semper viverra nam libero justo laoreet sit. Enim neque volutpat ac tincidunt vitae semper quis lectus. Porta nibh venenatis cras sed felis eget velit. Consectetur a erat nam at lectus urna duis convallis. Varius sit amet mattis vulputate enim. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            </p>

          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Dignissim suspendisse in est ante in nibh mauris. Lacus laoreet non curabitur gravida arcu. Dictumst quisque sagittis purus sit. Tempor orci eu lobortis elementum. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Quam viverra orci sagittis eu. Leo vel fringilla est ullamcorper eget. Rutrum quisque non tellus orci ac. Diam ut venenatis tellus in. Donec adipiscing tristique risus nec feugiat. Tempus iaculis urna id volutpat lacus laoreet non. Senectus et netus et malesuada fames ac. In massa tempor nec feugiat nisl pretium fusce. Ut faucibus pulvinar elementum integer enim. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Massa sed elementum tempus egestas sed sed risus. Eget lorem dolor sed viverra ipsum.
              Gravida quis blandit turpis cursus in hac habitasse platea. Volutpat maecenas volutpat blandit aliquam etiam erat. Ultrices tincidunt arcu non sodales neque. Purus sit amet luctus venenatis. Consequat semper viverra nam libero justo laoreet sit. Enim neque volutpat ac tincidunt vitae semper quis lectus. Porta nibh venenatis cras sed felis eget velit. Consectetur a erat nam at lectus urna duis convallis. Varius sit amet mattis vulputate enim. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            </p>
          </Container>
        </Card>

    </div>
  )
}