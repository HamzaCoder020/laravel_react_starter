import img1 from '../../images/home/developer3.png';
import HeroSection from "../components/HeroSec/HeroSection.jsx";
import React, { useState, useEffect } from 'react';
import FadeInSlider from '../components/HeroSec/FadeInSlider.jsx';
import Apartus from "../components/Portfolio/apart_us/apartus.jsx";
import CTA from "../components/CTA/CTA";



const images = [
    img1
    ]

export default function Whatwedo() {
    return <div className="">
        <HeroSection label={`Hire World’s Top Talent`} tagline={`Discover a diverse talent oasis at Atlantis BPO Solutions.
         Our versatile platform connects you with skilled professionals in web development, app development,
         UI/UX design, digital marketing, copywriting, and customer service. Experience
         seamless collaboration with experts tailored to your time zone and work style.
         Unleash the extraordinary for your business success.`} >
            <FadeInSlider images={images}/>
        </HeroSection>

        <Apartus />

        <CTA head="Supercharge Your Business Today!" tag="Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!"/>

    </div>;
}
