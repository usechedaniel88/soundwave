import React from 'react'
import Card from 'react-bootstrap/Card';
import JoinNowButton from './JoinNowButton'

type Props = {}

const FeelTheMusicCard = (props: Props) => {
  return (
    <>
    <Card className='card mx-auto' style={{ width: '20rem', background: '#2F303A', border: 'none', display: 'grid',gridColumnStart:'2', gridRowStart: '4'}}>
      <Card.Body>
        <Card.Title><h1 style={{fontSize: '40px'}}>Feel The Music</h1></Card.Title>
        <Card.Text>
            <p>Stream over 20 thousand songs with one click</p>
        </Card.Text>
        <JoinNowButton/>
      </Card.Body>
    </Card>
    </>
  )
}

export default FeelTheMusicCard

