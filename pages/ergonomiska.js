import Page from '../components/pageLayout'

export default function ergonomiska() {

  const itemList = [
    {
      name: 'Ergonomiska',
      img: 'https://www.pricerunner.se/product/1200x630/1829669797/Microsoft-Natural-Ergonomic-Keyboard-4000-(Nordic).jpg',
      text: 'Ergonomiska',
      banner: { text: "Premium", icon: 1 },
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Ergonomiska',
      img: 'https://www.pricerunner.se/product/1200x630/1829669797/Microsoft-Natural-Ergonomic-Keyboard-4000-(Nordic).jpg',
      text: 'Ergonomiska',
      banner: { text: "Premium", icon: 1 },
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Ergonomiska',
      img: 'https://www.pricerunner.se/product/1200x630/1829669797/Microsoft-Natural-Ergonomic-Keyboard-4000-(Nordic).jpg',
      text: 'Ergonomiska',
      banner: { text: "Premium", icon: 1 },
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
      header: "Ergonomiska",
      textParagraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ]
    },

  ]

  return <Page pageTitle="ERGONOMISKA TANGENTBORD" itemList={ itemList } textList={ textList } />
}