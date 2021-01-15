import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import TopicContent from '../../components/TopicContent'

export default function Finskor() {
  const shoeList = [
    {
      name: 'Finsko1',
      img: 'https://topstore.nu/images/2.55952/ladersydda-oxford-inspirerade-finskor.jpeg',
      text: 'Finsko testtext'
    },
    {
      name: 'Finsko2',
      img: 'https://quickbutik.imgix.net/2307x/products/5aec59665e0c9.jpeg',
      text: 'Finsko2 testtext'
    },
  ]
  return (
    <TopicContent data={shoeList}/>
  )
}
