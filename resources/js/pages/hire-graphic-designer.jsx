import img1 from '../../images/home/developer3.png';
import HeroSection from "../components/HeroSec/HeroSection.jsx";
import React, { useState, useEffect } from 'react';
import FadeInSlider from '../components/HeroSec/FadeInSlider.jsx';
import HeadingTag from "../components/HeadingTag.jsx";
import HireSteps from "../components/hireSteps/HireSteps.jsx";
import ui_web from "../../images/ui_website.png";
import abid from "../../images/abid.png";
import shah from "../../images/shah.png";
import HireBoxes from "../components/HireBox/HireBoxes.jsx";
import Accordian from "../components/accordians/Accordians.jsx";
import "../components/hireSteps/HireSteps.css";
import Graphics_resources from "../components/resources/graphics_resources";
import CTA from "@/components/CTA/CTA";

const whyUs = [
    {head:"Creativity", content: "Our company is renowned for delivering creative solutions, and creativity is our core strength. We take pride in bringing your ideas to life through relevant, captivating, and robust designs. With a proven track record of success, we strive to exceed your expectations.\n" },
    {head:"Typography Expertise", content: "Our graphic designers possess a deep understanding of various aspects of typography, including line heights, font styles, and more. This invaluable skill enables us to create designs that are visually appealing and communicate your message with clarity." },
    {head:"Proficiency in Tools", content: "Our graphic designers are highly trained and proficient in utilizing advanced design tools such as Adobe Illustrator, Adobe Photoshop, Adobe XD, Adobe InDesign, CorelDRAW, Figma, and more. With these industry-standard tools, we offer a wide range of creative and interactive design services.\n" }
]



const faqs = [
    {header:"Q.Why should we consider hiring a graphic designer from Atlantis Tech?\n",
        body:"Choosing a graphic designer from Atlantis Tech provides you with the advantage of working with seasoned professionals capable of bringing your creative visions to life. Our services are marked by prompt communication, the use of superior-quality tools, UI/UX strategy implementation, on-time project delivery, round-the-clock support, cost-effectiveness, and exceptional expertise.\n"},

    {   header:"Q.What steps should I take to hire a graphic designer?\n",
        body:"To hire a graphic designer from Atlantis Tech, you simply need to click on the \"Hire a Graphic Designer Now\" button. Fill in the details of your project and our team will swiftly get in touch with you to discuss your needs further."
    },
    {   header:"Q.Who will have full ownership of the design created?",
        body:"You will have complete ownership of the designs once the project is completed and the payment is made. This allows you to use the designs freely without any restrictions.\n"    },

    {   header:"Q.Which industries can benefit the most from design services?\n",
        body:"Our graphic designers have an extensive portfolio across a wide range of industries including \n" +
            "Healthcare\n" +
            "Automobile\n" +
            "IoT\n" +
            "Hospitals\n" +
            "FinTech\n" +
            "Education\n" +
            "Construction\n" +
            "Transport\n" +
            "Clothing\n" +
            "Telecommunication\n"  },

    {   header:"Q.What are the key skills possessed by your graphic designer?\n",
        body:"Our graphic designers are highly skilled in several areas including\n" +
            "time management\n" +
            "technical abilities\n" +
            "Problem-solving\n" +
            "Typography\n" +
            "Teamwork\n" +
            "advertisement design\n" +
            "Communication\n" +
            "Meticulous attention to detail.\n"    },

    {   header:"Q.How many revisions are included in your service?\n",
        body:  "We offer revisions to ensure that the designs meet your expectations. We work closely with you to incorporate your feedback and achieve the desired results."    },

    {   header:"Q.How does the Graphic Design process work?",
        body:  "Our graphic design process is systematic and involves several stages: establishing the work agreement, conducting research and discovery, developing design concepts, carrying out revisions and refinements, finalizing and delivering the design, and finally, processing the payment.\n"    },
]

const images = [
    img1
]

const tag_line = "To establish a robust online presence for your enterprise or business, it is imperative to focus on graphic design. Hire a graphic designer from Atlantis TechTech to elevate your brand identity and enhance your website graphics.";


export default function HireGraphicDesigner() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label="Hire a Graphic Designer to Enhance Your Brand Identity" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a Graphic Designing Team" tag={"Our 3-step process simplifies your journey from concept to a polished product. At Atlantis, we prioritize efficiency and offer the flexibility to hire a dedicated UI/UX design team within 24 hours.\n"}/>
                <HireSteps />
            </div>
        </div>

        <Graphics_resources/>

        {/*<div className="ui_resource_sec">
            <div className="container">
                <HeadingTag heading="PHP Developers You Can Hire" tag="Hire top-notch PHP developers for exceptional web application solutions. Our talented developers deliver outstanding results, ensuring your project is completed on time and to the highest standards."/>
                <div className="resource_body">
                    <HireBoxes data={resource}/>
                </div>
            </div>
        </div>*/}



        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Top Qualities of Our Graphic Designers" tag="Our graphic designers possess exceptional qualities that set them apart. When you hire a graphic designer from Atlantis Tech, you can expect:"/>
                <HireBoxes data={whyUs}/>
            </div>
        </div>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire Graphic Designers to Transform Your Branding</h2>
                        <p className="mt-5">Enhance Your Branding with Skilled Graphic Designers from Atlantis Tech. Our team of experienced designers is dedicated to delivering results-driven success at affordable rates. As a reputable graphic design company, we specialize in creating creative and impactful graphics that effectively communicate your message to your target audience.</p>
                        <p className="fw-bold mt-4">
                            From eye-catching banner images to memorable logos, our multi-talented graphic designers are adept at producing top-notch designs that will set you apart from your competitors. We understand the importance of consistency and will ensure that your brand is effectively showcased across various mediums, including print ads, flyers, social media posts, business cards, and more.
                        </p>
                        <p className="mt-5">Now is the perfect time to elevate your brand's identity and make a lasting impression.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
