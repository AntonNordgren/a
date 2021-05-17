import Page from '../components/pageLayout'

export default function tradlosa() {

  const itemList = [
    {
      name: 'Trådlösa',
      img: 'https://i5.walmartimages.com/asr/4ac8cdc6-1632-4a96-9dc0-5c2230671666_1.6ba1ddb282b029141b065539e709d6fb.jpeg',
      text: 'Trådlösa',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Trådlösa',
      img: 'https://i5.walmartimages.com/asr/4ac8cdc6-1632-4a96-9dc0-5c2230671666_1.6ba1ddb282b029141b065539e709d6fb.jpeg',
      text: 'Trådlösa',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Trådlösa',
      img: 'https://i5.walmartimages.com/asr/4ac8cdc6-1632-4a96-9dc0-5c2230671666_1.6ba1ddb282b029141b065539e709d6fb.jpeg',
      text: 'Trådlösa',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
  ]

  const textList = [

    {
      header: "Trådlösa",
      textParagraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ]
    },

  ]

  return <Page pageTitle="TRÅDLÖSA TANGENTBORD" itemList={ itemList } textList={ textList } />
}