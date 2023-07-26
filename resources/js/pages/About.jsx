import img1 from '../../images/home/developer3.png';
import HeroSection from "../components/HeroSec/HeroSection.jsx";
import React, { useState, useEffect } from 'react';
import FadeInSlider from '../components/HeroSec/FadeInSlider.jsx';



const images = [
    img1
]

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return <div className="">
        <HeroSection label={`Acquire The Most Exceptional Talent Around The World in Less than 24 Hours`} >
            <FadeInSlider images={images}/>
        </HeroSection>
    </div>;
}
