import Page from '../components/pageLayout'

export default function membran() {

  const itemList = [
    {
      name: 'Membran',
      img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6321/6321792_sd.jpg',
      text: 'Membran',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Membran',
      img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6321/6321792_sd.jpg',
      text: 'Membran',
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Membran',
      img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6321/6321792_sd.jpg',
      text: 'Membran',
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
      header: "Membran",
      textParagraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ]
    },

  ]

  return <Page pageTitle="Membran" itemList={ itemList } textList={ textList } />
}