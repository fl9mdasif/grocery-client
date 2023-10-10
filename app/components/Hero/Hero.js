'use client'
import React from 'react';
import Image from "next/image";
import './Hero.styles.css';
import hero3 from '../assets/heroImg/h3.png';
import Link from "next/link";

const Hero = () => {
    return (

        < div div className="h-scren w-screen " >
            <Image className="object-fill sliderImg " src={hero3} alt="empty" />
            <div className="absolute1 bottom-10 flex justify-center items-center  ">

                <div className=" ">
                    <Link href='/'
                        style={{ backgroundColor: '#d86614' }}
                        className=" heroBtn  text-white  sm:px-12 sm:py-8  rounded-xl">Buy now</Link>
                </div>
            </div>

        </div>

    );
};

export default Hero;