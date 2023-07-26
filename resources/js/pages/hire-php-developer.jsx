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
import PHP_resources from "@/components/resources/php_resources";

const whyUs = [
    {head:"Custom App Development", content: "Our developers are proficient in custom application development, specifically designed to fulfill your unique business needs and propel you towards your business goals.\n" },
    {head:"CRM Platform Development", content: "With expertise in CRM platform development, our PHP developers can create tailored CRM solutions to streamline your customer relations and improve business efficiency.\n" },
    {head:"API Integration", content: "Our PHP developers are skilled in API integration, seamlessly connecting different software systems to enhance the functionality of your web applications and services.\n" },
    {head:"Cloud Solutions", content: "Our team is adept at developing cloud solutions, enabling your business to leverage the scalability, flexibility, and cost benefits of cloud technologies.\n" },
    {head:"PHP Consulting", content: "Our PHP developers offer expert consulting services to guide your PHP development process, providing strategic insights and recommendations to optimize your web solutions.\n" },
    {head:"Active Maintenance", content: "Beyond just development, our PHP developers provide active maintenance to ensure your PHP applications are always up to date, secure, and performing at their best." }
]

const resource = [

    {img: shah, head: "Qazi Sajjad Akbar", content: "Experienced in PHP Laravel framework, proficient in developing responsive web applications with intuitive user interfaces.\n" +
            "\n" +
            "Laravel, Code Igniter, PHP Core\n"},
    {img: abid, head: "Danish Sheraz", content: "Expert in PHP Laravel framework, experienced in developing scalable web applications with robust backend functionality.\n" +
            "\n" +
            "Laravel, Code Igniter, PHP Core, Wordpress, Node Js\n"},
    {img: shah, head: "Yasir Mehmood", content: "Experienced in PHP CodeIgniter framework, proficient in developing responsive web applications with intuitive user interfaces.\n"}
]

const faqs = [
    {header:"Q.What modern expertise should a PHP developer possess?\n",
        body:"Hiring a UI/UX designer or team at Atlantis Tech is simple. Reach out to us via our Contact Us page or directly through our email or phone. Our dedicated talent specialist will discuss your project needs and suggest the best suitable talent for you. After you review and approve the choice, we can proceed with the engagement."},

    {   header:"Q.Can you explain your PHP web application development process?\n",
        body:"Yes, at Atlantis Tech, we offer flexible hiring models.  If you have a clear understanding of the tasks for the designer, you can hire a UI/UX designer on an hourly, part-time, or full-time basis depending on your project requirements."
    },
    {   header:"Q.What essential skills should be considered when hiring a freelance PHP developer?\n",
        body:"Hiring dedicated designers ensures that you have a team or individual who is fully focused on your project. This leads to better understanding, faster turnaround times, and high-quality results. It also provides better cost efficiency as you only pay for the work done.\n"    },

    {   header:"Q.What are the benefits of outsourcing PHP development?",
        body:"Our UI/UX designers can help bring your vision to life by creating intuitive and visually appealing interfaces. They conduct thorough user research, create user personas, and design interactive prototypes to provide a seamless and engaging user experience. Their expertise can help enhance user satisfaction, reduce bounce rates, and increase user engagement on your platform.They specialize in a range of design services including \n" +
            "Web Design\n" +
            "Mockups\n" +
            "Storyboards\n" +
            "Wireframes\n" +
            "Prototyping\n" +
            "UI/UX Design Strategy\n" +
            "Flow Diagrams \n" +
            "Mobile App Design\n" +
            "Graphic Design\n" +
            "Logo Design\n" +
            "Interaction Design\n"    },

    {   header:"Q.Who can collaborate with Atlantis?\n",
        body:"Our UI/UX designers can help bring your vision to life by creating intuitive and visually appealing interfaces. They conduct thorough user research, create user personas, and design interactive prototypes to provide a seamless and engaging user experience. Their expertise can help enhance user satisfaction, reduce bounce rates, and increase user engagement on your platform.They specialize in a range of design services including \n" +
            "Web Design\n" +
            "Mockups\n" +
            "Storyboards\n" +
            "Wireframes\n" +
            "Prototyping\n" +
            "UI/UX Design Strategy\n" +
            "Flow Diagrams \n" +
            "Mobile App Design\n" +
            "Graphic Design\n" +
            "Logo Design\n" +
            "Interaction Design\n"    },

    {   header:"Q.Why should we choose PHP for web development?",
        body:"Our UI/UX designers can help bring your vision to life by creating intuitive and visually appealing interfaces. They conduct thorough user research, create user personas, and design interactive prototypes to provide a seamless and engaging user experience. Their expertise can help enhance user satisfaction, reduce bounce rates, and increase user engagement on your platform.They specialize in a range of design services including \n" +
            "Web Design\n" +
            "Mockups\n" +
            "Storyboards\n" +
            "Wireframes\n" +
            "Prototyping\n" +
            "UI/UX Design Strategy\n" +
            "Flow Diagrams \n" +
            "Mobile App Design\n" +
            "Graphic Design\n" +
            "Logo Design\n" +
            "Interaction Design\n"    },
]

const images = [
    img1
    ]

const tag_line = "To enhance the functionality and performance of your web applications, it is vital to consider PHP development. Hire a PHP developer from Atlantis TechTech to take your web applications to the next level and strengthen your digital footprint.";


export default function HirePhpDeveloper() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label="Hire PHP Developers for High-Performance Web Applications" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a PHP Development Team" tag="Our streamlined 3-step process simplifies your journey from idea to a fully-fledged web application. At Atlantis, we prioritize efficiency and offer the flexibility to hire a dedicated PHP development team within 24 hours."/>
                <HireSteps />
            </div>
        </div>

        <PHP_resources/>
        {/*<div className="ui_resource_sec">
            <div className="container">
                <HeadingTag heading="PHP Developers You Can Hire" tag="Hire top-notch PHP developers for exceptional web application solutions. Our talented developers deliver outstanding results, ensuring your project is completed on time and to the highest standards."/>
                <div className="resource_body">
                    <HireBoxes data={resource}/>
                </div>
            </div>
        </div>*/}

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire PHP Developers to Build Robust and Scalable Web Applications.</h2>
                        <p className="mt-5">Supercharge your web applications with skilled PHP developers from Atlantis TechTech. Our team of experienced developers is dedicated to delivering results-driven success at affordable rates.
                            As a leading PHP development company, we specialize in creating dynamic and robust web applications that cater to your specific needs.</p>
                            <p className="fw-bold mt-4">
                                From e-commerce platforms to content management systems, our versatile PHP developers are adept at producing top-quality web solutions that will set you apart from your competitors.
                            </p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>


        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our PHP Developers" tag="PHP development services encompass a broad spectrum of expertise. Here are the key areas our PHP developers excel in"/>
                <HireBoxes data={whyUs}/>
            </div>
        </div>

        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>

    </div>;
}
