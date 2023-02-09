import React from 'react'
import girlPic from '../assets/landing-page-girl.png'
import {Col, Image, Row} from 'react-bootstrap'
import FeelTheMusicCard from '../components/FeelTheMusicCard'

type Props = {}

const Home = (props: Props) =>{
    return (
                <Row style={{ width: '100%', height: '100%' , marginTop: '160px'}} className="d-flex align-items-center justify-content-">
                    <Col>
                    <Image src={girlPic} alt="My Image" className="d-none d-xl-block fixed-bottom" style={{bottom: 0, height: "80%", width: "500px"}}/>
                    </Col>
                    <Col>
                    <FeelTheMusicCard /></Col>
                    <div style={{ width: '100px', height: '100px', background: '#bc3a801a', zIndex:'-1', borderRadius: '50%', top:'200px', left:'200px', position:'fixed'}}></div>
                    <div></div>
                    <div></div>
                </Row>
    )
}

export default Home