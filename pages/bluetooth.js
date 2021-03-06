import Page from '../components/pageLayout'

export default function Bluetooth() {

  const itemList = [
    {
      name: 'Bluetooth',
      img: 'https://img.gkbcdn.com/s3/p/2019-08-24/ajazz-380i-bluetooth-wireless-keyboard-gray-1571992829999.jpg',
      text: 'Bluetooth',
      banner: { text: "Premium", icon: 1 },
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Bluetooth',
      img: 'https://img.gkbcdn.com/s3/p/2019-08-24/ajazz-380i-bluetooth-wireless-keyboard-gray-1571992829999.jpg',
      text: 'Bluetooth',
      banner: { text: "Premium", icon: 1 },
      details: [
        'Detail 1',
        'Detail 2',
        'Detail 3',
        'Detail 4',
      ]
    },
    {
      name: 'Bluetooth',
      img: 'https://img.gkbcdn.com/s3/p/2019-08-24/ajazz-380i-bluetooth-wireless-keyboard-gray-1571992829999.jpg',
      text: 'Bluetooth',
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
      header: "Bluetooth",
      textParagraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ]
    },

  ]

  return <Page pageTitle="BLUETOOTH TANGENTBORD" itemList={ itemList } textList={ textList } />
}