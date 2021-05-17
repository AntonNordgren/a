import Page from '../../components/pageLayout'

export default function rengoring() {

  const itemList = [
    {
      name: 'Klickiga',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61zTpKONOFL._AC_SL1500_.jpg',
      text: 'Klickiga',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Klickiga',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61zTpKONOFL._AC_SL1500_.jpg',
      text: 'Klickiga',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Klickiga',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61zTpKONOFL._AC_SL1500_.jpg',
      text: 'Klickiga',
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
      header: "Klickiga",
      textParagraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ]
    },

  ]

  return <Page pageTitle="KLICKIGA BRYTARE" itemList={ itemList } textList={ textList } />
}