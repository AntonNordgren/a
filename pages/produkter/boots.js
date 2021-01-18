import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import TopicContent from '../../components/TopicContent'

export default function Boots() {
  const shoeList = [

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-President-BlackMatte-191107-1.jpg?v=1573146590',
      text: 'Boots are awesome'
    },

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/1224/0154/products/IMG_9554_613e6ba8-b608-4f8d-bae7-0051f2cf7bc9_1024x.JPG?v=1569268168',
      text: 'Boots are awesome'
    },

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-President-BlackMatte-191107-1.jpg?v=1573146590',
      text: 'Boots are awesome'
    },

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/1224/0154/products/IMG_9554_613e6ba8-b608-4f8d-bae7-0051f2cf7bc9_1024x.JPG?v=1569268168',
      text: 'Boots are awesome'
    },

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-President-BlackMatte-191107-1.jpg?v=1573146590',
      text: 'Boots are awesome'
    },

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/1224/0154/products/IMG_9554_613e6ba8-b608-4f8d-bae7-0051f2cf7bc9_1024x.JPG?v=1569268168',
      text: 'Boots are awesome'
    },

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-President-BlackMatte-191107-1.jpg?v=1573146590',
      text: 'Boots are awesome'
    },

    {
      name: 'Boots',
      img: 'https://cdn.shopify.com/s/files/1/1224/0154/products/IMG_9554_613e6ba8-b608-4f8d-bae7-0051f2cf7bc9_1024x.JPG?v=1569268168',
      text: 'Boots are awesome'
    },


  ]
  return (
    <TopicContent data={shoeList} />
  )
}

