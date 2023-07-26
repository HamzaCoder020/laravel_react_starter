import HeroSection from "../components/HeroSec/HeroSection.jsx";
import React, { useState, useEffect } from 'react';
import FadeInSlider from '../components/HeroSec/FadeInSlider.jsx';

import WhyAtlantis from "../components/whyAtlantis/WhyAtlantis.jsx";
import img1 from '../../images/home/developer3.png';
import img2 from '../../images/home/developer1.png';
import img3 from '../../images/home/dveloper2.png';
import ExpenseSec from "../components/ExpenseSec";
import Portfolio from "../components/Portfolio/PortfolioSec.jsx";
import IndividualIntervalsExample from "../components/testimonials/Testimonial.jsx";
import Accordian from "../components/accordians/Accordians";
import CTA from "../components/CTA/CTA.jsx";





export default function Home() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = [ //data for accordian
        {header:"Q: What are the primary services provided by Atlantis Tech?",
            body:"Atlantis delivers a range of services, including \n" +
                "web development \n" +
                "app development\n" +
                "UI/UX design\n" +
                "digital marketing\n" +
                "email marketing \n" +
                "copywriting\n" +
                "customer service.\n"},

        {header:"Q: How many industries does Atlantis Tech serve?\n",
            body:"Atlantis caters to a wide range of industries, including but not limited to \n" +
                "Healthcare\n" +
                "E-commerce\n" +
                "Finance\n" +
                "Education\n" +
                "Technology\n" +
                "Retail\n" +
                "Research & Development\n" +
                "Business/IT Services\n" +
                "Travel & Hospitality\n" +
                "Construction\n" +
                "Logistics & Automotive\n"},

        {header:"Q: What types of technologies does Atlantis Tech specialize in?",
            body:"Atlantis caters to a wide range of technologies including but not limited to\n" +
                "PHP\n" +
                "Python\n" +
                "iOS & Android\n" +
                "JavaScript\n" +
                "Java\n" +
                "Node Js\n" +
                ".NET\n" +
                "UI/UX\n"},
        {header:"Q: How many full-time employees does Atlantis Tech have?",
            body:"Currently, Atlantis has 55 full-time employees working in various departments, including development, design, marketing, and customer service."},

        {header:"Q: What are the key products created by Atlantis Tech?",
            body:"Atlantis has a diverse portfolio of products that includes web and mobile applications, e-commerce platforms, CRM solutions, and content management systems. For more information, please visit our portfolio page."},
        {header:"Q: How does Atlantis Tech handle client communication?",
            body:"Atlantis has a dedicated customer service team that manages communication with clients through various channels including email, phone, and live chat."},
        {header:"Q: What sets Atlantis Tech apart from other development companies?",
            body:"Atlantis offers a range of perks and benefits to clients, including access to a diverse pool of expert developers, a simple and sleek hiring process, shortlisting of talent under 24 hours, a dedicated talent specialist, and support for payments, legal, and administrative issues. Additionally, Atlantis provides talent management and performance reporting throughout the collaboration to ensure a seamless experience for clients."},
    ]

    const images = [
        img1,
        img2,
        img3,
        // Add more image paths as needed
    ];

    return <div className="home">
        <HeroSection label={`Hire the Best and Brightest Minds for Your Project within 24 Hours`} tagline={'Atlantis Tech provides a versatile platform that enables you to screen and recruit skilled professionals, such as web developers, app developers, UI/UX designers, digital marketers, copywriters, and customer service specialists, who are well-suited to your time zone and work style.\n'} >
            <FadeInSlider images={images}/>
        </HeroSection>

        <ExpenseSec/>

        <Portfolio/>

        <WhyAtlantis />

        <IndividualIntervalsExample />

        <Accordian heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products, or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" data={data}/>

        <CTA head="Supercharge Your Business Today!" tag="Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!" />

    </div>;
}


