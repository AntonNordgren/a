import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import TopicContent from '../../components/TopicContent'

export default function Sneakers() {
  const shoeList = [
    {
      name: 'Klickiga',
      img: 'https://c1.neweggimages.com/ProductImage/AN5JS201021PbQ8x.jpg',
      text: 'Klickiga brytare'
    },
    {
      name: 'Klickiga',
      img: 'https://c1.neweggimages.com/ProductImage/AN5JS201021PbQ8x.jpg',
      text: 'Klickiga brytare'
    },
    {
      name: 'Klickiga',
      img: 'https://c1.neweggimages.com/ProductImage/AN5JS201021PbQ8x.jpg',
      text: 'Klickiga brytare'
    },
  ]
  return (
    <TopicContent data={shoeList}/>
  )
}