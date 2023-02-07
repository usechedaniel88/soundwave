import React from 'react'
import microphone from '../assets/microphone.svg'
import albums from '../assets/albums.svg'
import more from '../assets/more.svg'
import covers from '../assets/covers.jpg'

type Props = {}

const Discover = (props: Props) => {
    return (
        <section>
            <h1>Discover new music</h1>
            <img src={microphone}></img>
            <p>Charts</p>
            <img src={albums}></img>
            <p>Albums</p>
            <img src={more}></img>
            <p>More</p>
            <p>
                By joining 
            </p>
            <img src={covers}></img>
        </section>
    )

}

export default Discover