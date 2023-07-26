import img1 from '../../images/home/developer3.png';
import HeroSection from "../components/HeroSec/HeroSection.jsx";
import React, { useState, useEffect } from 'react';
import FadeInSlider from '../components/HeroSec/FadeInSlider.jsx';
import CTA from "../components/CTA/CTA";
import HireSteps from "../components/hireSteps/HireSteps.jsx";
import HeadingTag from "../components/HeadingTag.jsx";
import HireBoxes from "../components/HireBox/HireBoxes.jsx";
import "../../css/app.css";



const images = [
    img1
]
const whyus = [
    { head:"Fixed Bid Plan", content: "We provide you with a comprehensive proposal based on your project requirements. This plan includes a clear scope of work, a fixed schedule, and a predetermined cost. It allows you to have a well-defined project plan with a fixed budget, ensuring transparency and predictability." },
    {head:"Dedicated Plan", content: "Our Dedicated Plan allows you to customize your project requirements according to your specific needs. You have the flexibility to choose dedicated resources who will work exclusively on your project. This plan offers a reduced cost compared to traditional hiring models, and it provides you with greater control and scalability." },
    {head:"Hourly Plan", content:"If you prefer more flexibility and want to optimize your project based on evolving needs, our Hourly Plan is ideal for you. You can hire our talented resources on an hourly basis, paying only for the actual time they work on your project. This plan allows you to make adjustments, add features, or scale up or down as needed, giving you greater agility in project management." }
]


export default function Howitworks() {
    return <div className="">
        <HeroSection label={`Hire World’s Top Talent`} tagline={`Discover a diverse talent oasis at Atlantis BPO Solutions.
         Our versatile platform connects you with skilled professionals in web development, app development,
         UI/UX design, digital marketing, copywriting, and customer service. Experience
         seamless collaboration with experts tailored to your time zone and work style.
         Unleash the extraordinary for your business success.`} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="ui_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Atlantis Tech Screening Process" tag="Our streamlined 3-step process simplifies your journey from idea to the final product. At Atlantis, we prioritize efficiency and offer the flexibility to hire a dedicated Java development team within 24 hours."/>
                <HireSteps />
            </div>
        </div>
        <div className="why_choose py-5 mb-5">
            <div className="container">
                <HeadingTag heading="Why Our Clients Choose Us?" tag="Our streamlined 3-step process simplifies your journey from idea to the final product. At Atlantis,
we prioritize efficiency and offer the flexibility to hire a dedicated Java development team within 24 hours."/>
                <HireBoxes data={whyus}/>
            </div>
        </div>


        <CTA head="Supercharge Your Business Today!" tag="Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!"/>

    </div>;
}
