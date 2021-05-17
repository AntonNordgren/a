import Page from '../../components/pageLayout'

export default function rengoring() {

  const itemList = [
    {
      name: 'PRF 4-44',
      img: 'https://www.elfa.se/Web/WebShopImages/landscape_large/6-/01/30098436-01.jpg',
      text: 'Rengör tangentbordet med luft!',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
      ]
    },
    {
      name: 'PRF 4-44',
      img: 'https://www.elfa.se/Web/WebShopImages/landscape_large/6-/01/30098436-01.jpg',
      text: 'Rengör tangentbordet med luft!',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
      ]
    },
    {
      name: 'PRF 4-44',
      img: 'https://www.elfa.se/Web/WebShopImages/landscape_large/6-/01/30098436-01.jpg',
      text: 'Rengör tangentbordet med luft!',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
      ]
    },
    
  ]

  const textList = [

    {
      header: "Att rengöra sitt tangentbord",
      textParagraphs: [
        "Alla tangentbord bör rengöras regelbundet. Att ett tangentbord hålls rent och fräscht handlar inte bara om den hygieniska aspekten, utan också på funktionaliteten. Damm och smuts fastnar mellan tangenterna och det kan orsaka problem. Regelbunden rengöring, åtminstone en gång per år, är att rekommendera då det förlänger tangentbordets livslängd. ",
        "Det finns olika sätt att rengöra ett tangentbord, men hur gör man det på ett säkert sätt? Beroende på hur smutsigt tangentbordet är kan städningen kräva mer eller mindre tid. Om tangentbordet är smått dammigt krävs det bara att ha en fiberduk som man fuktat med lite vatten. Det går även bra men den dammvippa som suger upp dammet. Är tangentbordet smutsigt och har gamla rester samt damm under tangentknapparna behöver man rengöra på djupet.",
        "För att rengöra på djupet krävs det att man kopplar loss varje tangent från bordet för att sedan tvätta rent grundligt. För att rengöra varje tangent kan man lägga samtliga i en skål med varmt vatten blandat med grönsåpa. Nästa steg är att tvätta och torka varje tangent var för sig. Innan man sätter tillbaka tangenterna ska man ha städat rent bordet först. Detta är betydligt mer tidskrävande, men ger ett fantastiskt resultat."
      ]
    },

  ]

  return <Page pageTitle="RENGÖRING" itemList={ itemList } textList={ textList } />
}