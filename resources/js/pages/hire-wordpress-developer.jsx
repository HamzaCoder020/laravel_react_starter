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
import CTA from "../components/CTA/CTA";
import Wordpress_resources from "../components/resources/wordpress_resources.jsx";

const whyUs = [
    {head:"Understanding WP Environment", content: "Seek a skilled WordPress developer who possesses in-depth knowledge of CRM, excels in front-end theme creation, and is adept at back-end optimization.\n" },
    {head:"Proficiency in Front-End Development", content: "Our WordPress developers undergo rigorous training in CSS, HTML, and JS, enabling them to build a scalable front-end for your website.\n" },
    {head:"Mastery of PHP", content: "Given its crucial role on the server side, our WordPress developers possess proficient skills in PHP, allowing them to effectively work with WordPress and ensure smooth website operation.\n" },
    {head:"Database Management", content: "Our talented team utilizes MySQL in WordPress for database management, as it seamlessly integrates with PHP and offers optimal website server optimization.\n" },
    {head:"Frameworks and Libraries", content: "As CMS platforms thrive on frameworks and libraries, we are proficient in utilizing React, Laravel, and Bootstrap to enhance the WordPress platform efficiently.\n" },
    {head:"Time Management", content: "Our strength lies in proficiently managing various tasks, ranging from theme development to plugin optimization, thus optimizing both the front-end and back-end aspects of the website.\n" }
]



const faqs = [
    {header:"Q. What are the key requirements for finding a WordPress developer?\n",
        body:"Consider the following three crucial factors when seeking to hire WordPress developers:\n" +
            "Product fit\n" +
            "Industry fit\n" +
            "Company culture fit\n"},

    {   header:"Q. What are the required skills of a WordPress developer?\n",
        body:"Here is a list of the key skills to prioritize when hiring a WordPress development team:\n" +
            "Proficiency in the WordPress environment\n" +
            "Knowledge of PHP\n" +
            "Familiarity with front-end languages\n" +
            "Experience with relevant frameworks and libraries\n" +
            "Expertise in database management\n"},
    {   header:"Q. How can a WordPress developer assist me in my project?\n",
        body:"A competent WordPress developer can provide assistance in the following areas:\n" +
            "Creating a CMS from scratch\n" +
            "Developing custom WordPress themes\n" +
            "Installing website data analytics\n" +
            "Ensuring website responsiveness\n" +
            "Planning the entire website front-end\n" +
            "Creating custom WordPress plugins or optimizing third-party ones.\n" },

    {   header:"Q. What are the main challenges faced by WordPress developers?\n",
        body:"Hire a WordPress developer who can tackle the following challenges:\n" +
            "WordPress website hacking\n" +
            "Connectivity issues with the database\n" +
            "Impact of updates on the CMS, plugins, etc.\n" +
            "Performance slowdown due to excessive plugin usage\n"  },

    {   header:"Q. Is your WordPress developer available in my timezone?",
        body:"Yes, our team of WordPress developers is available to work according to your timezone."    },

    {   header:"Q. Do you have experience with GitHub and Bitbucket?\n",
        body:  "Yes, our developers have hands-on experience with GitHub and Bitbucket for preserving work progress and ensuring version control."    },

    {   header:"Q. Are you familiar with SEO?\n",
        body:  "Yes, our WordPress team possesses comprehensive SEO knowledge to enhance website traffic through organic search results."    },

]

const images = [
    img1
]

const tag_line = "Discover the Perfect WordPress Developers, Coders, and Designers for Hire with Atlantis. With a pool of 20+ talented developers, we provide a seamless hiring experience for project- and hourly-based positions.";


export default function HireWordpressDeveloper() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label="Hire a WordPress Developer to Transform Your Website into a Visual Masterpiece." tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a Wordpress Development Team" tag={"Our streamlined 3-step process simplifies your journey from idea to the final product. At Atlantis, we prioritize efficiency and offer the flexibility to hire a dedicated Wordpress development team within 24 hours.\n"}/><HireSteps />
            </div>
        </div>

        <Wordpress_resources/>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire a WordPress Developer to Optimize Your Website</h2>
                        <p className="mt-5">At Atlantis Tech, we take pride in being a trusted company with a team of highly skilled WordPress developers. With the support of our AI-based agile process, we have earned the trust of numerous renowned clients who rely on us to create engaging and competitive websites. Now, you can hire our WordPress developers for your enterprise and benefit from world-class prototype web applications.</p>
                        <p className="fw-bold mt-3">Our WordPress development services offer a wide range of benefits, including:</p>
                            <p>Extensive collection of themes, plugins, templates, and tools</p>
                            <p>User-friendly interface for easy navigation</p>
                            <p>Flexibility for easy customization and expansion</p>
                            <p>Scalability to accommodate future growth</p>
                            <p>An active and vibrant community for ongoing support and updates</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our WordPress Developers" tag="Our commitment is to provide you with top-notch WordPress development expertise, ensuring a lasting partnership with your business based on competitiveness."/>
                <HireBoxes data={whyUs}/>
            </div>
        </div>


        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
