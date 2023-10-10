import React from 'react'
import card1 from '../assets/cardImg/1.jpg'
import card2 from '../assets/cardImg/2.jpg'
import card3 from '../assets/cardImg/3.jpg'
import Image from 'next/image'

export default function Card() {
    return (
        <div className='flex flex-wrap mt-8 mb-8 '>
            <div className="sm:w-1/3">
                <Image src={card1} />

            </div>
            <div className="sm:w-1/3">
                <Image src={card2} />

            </div>
            <div className="sm:w-1/3">
                <Image src={card3} />

            </div>

        </div>
    )
}
