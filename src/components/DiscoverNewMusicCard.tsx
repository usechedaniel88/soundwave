import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import microphone from '../assets/microphone.svg'
import albums from '../assets/albums.svg'
import more from '../assets/more.svg'

type Props = {}

const styles2 = {
    width: '80%',
    background: '#2F303A', 
    border: 'none'
  }

const DiscoverNewMusicCard = (props: Props) => {
  return (
    
    <Container style={styles2}>
        <Row>
            <Col><h1>Discover new music</h1></Col>
        </Row>
        <Row>
            <Col style={{border: '1px solid red', backgroundColor:'#202027'}}><Image style={{backgroundColor:'#2F303A'}} src={microphone} />Charts</Col>
            <Col><Image src={albums} />Albums</Col>
            <Col><Image src={more} />More</Col>
        </Row>
        <Row>
           <Col> <p>By joining you can benefit by listening to the latest albums released</p></Col>
        </Row>
    </Container>
    
  )
}

export default DiscoverNewMusicCard