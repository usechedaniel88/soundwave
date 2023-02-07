import React from 'react'
import JoinNowButton from '../components/JoinNowButton'

type Props = {}

const Home = (props: Props) =>{
    return (
        <section>
            <h1>Feel The Music</h1>
            <p>Stream over 20 thousand songs with one click</p>
            <JoinNowButton/>
        </section>
    )
}

export default Home