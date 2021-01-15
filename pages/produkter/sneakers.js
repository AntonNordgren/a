import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import TopicContent from '../../components/TopicContent'

export default function Sneakers() {
  const shoeList = [
    {
      name: 'Sneakers',
      img: 'https://chekich.com/i/l/000/0001856_chekich-ch017-bt-white-men-sneakers.jpeg',
      text: 'Sneak around'
    },
    {
      name: 'Sneakers',
      img: 'https://gearmoose.com/wp-content/uploads/2017/04/best-all-white-sneakers-for-men.jpg',
      text: 'Sneak around'
    },
  ]
  return (
    <TopicContent data={shoeList}/>
  )
}