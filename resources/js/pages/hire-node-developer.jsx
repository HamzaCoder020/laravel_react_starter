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
import Nodejs_resources from "../components/resources/nodejs_resources.jsx";

const whyUs = [
    {head:"CMS Development", content: "As a highly experienced Node.js development company, we specialize in creating intricate Content Management Systems (CMS) tailored for various industries.\n" },
    {head:"API Development", content: "Our skilled professionals proficiently build efficient RESTful APIs using Node.js and MongoDB, ensuring smooth data transfer and exceptional performance.\n" },
    {head:"Custom Development", content: "Our experts excel at incorporating custom functionalities and making modifications to meet your specific development requirements.\n" },
    {head:"Node.js Microservice", content: "Leveraging our strong command over Node.js, we efficiently manage and maintain serverless Node.js microservices, enabling the delivery of faster applications.\n" },
    {head:"Mobile Development", content: "We possess the expertise to develop lightweight, high-performance, and adaptable applications as a trusted Node.js development company.\n" },
    {head:"Consulting and Design", content: "Our knowledgeable team offers valuable insights to help you with code reviews, issue detection, scalability, and performance optimization for the seamless execution of Node.js development services.\n" }
]



const faqs = [
    {header:"Q. Can we initiate our project within the next 24 hours?\n",
        body:"Certainly! Our proficient business development team is capable of assembling a team and commencing the project within a 24-hour. To get started, kindly provide us with a few details about your project. You can reach us by visiting our \"contact us\" page.\n"},

    {   header:"Q. Which libraries do you prefer using for Node.js development?\n",
        body:"Our skilled team of Node.js developers is experienced in utilizing the following Node.js libraries:\n" +
        "Express.js\n" +
        'Meteor keystone\n' +
        'Koa.js\n' +
        'Socket.io\n'},
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

    {   header:"What are the key advantages of hiring a Node.js developer?\n",
        body:"There are several benefits to hiring a Node.js developer:\n" +
            "Ability to implement server-side code using JavaScript\n" +
            "Cost efficiency and ease of use\n" +
            "Accelerated development process\n" +
            "Seamless synchronization\n" +
            "Effortless sharing\n" +
            "Capability to develop real-time applications\n" +
            "Facilitates the use of a single codebase\n" +
            "SEO-friendly applications\n"    },

    {   header:"Q. What types of streams do Node.js developers utilize?\n",
        body:  "When you hire Node.js developers through Devsinc, they efficiently utilize various types of streams, including:\n" +
            "Readable streams: Facilitate reading operations\n" +
            "Writable streams: Useful for writing operations\n" +
            "Transform streams: Enable computation of output based on input\n" +
            "Duplex streams: Enable both reading and writing operations\n"    },

    {   header:"Q. How is Node.js more reliable than PHP and Java?\n",
        body:  "Node.js offers several advantages over PHP and Java, making it a preferred choice for many. Here are a few reasons to hire a Node.js developer:\n" +
            "Enhanced code synchronization between the client and server\n" +
            "JavaScript library, which makes it easier to use in projects\n" +
            "Suitable for web applications as it does not wait for API responses\n"    },
    {   header:"Q. What are the primary API functions relied upon in Node.js?",
        body:  "Node.js developers rely on two types of API functions:\n" +
            "Synchronous (Blocking functions)\n" +
            "Asynchronous (Non-blocking functions)\n"    },
    {   header:"Q. What are the common use cases of Node.js development?\n",
        body:  "Node.js finds frequent usage in various applications, including:\n" +
            "Real-time collaboration tools\n" +
            "Live chats\n" +
            "Streaming applications\n" +
            "Microservices architecture\n" +
            "Internet of Things (IoT)\n" +
            "Complex Single-Page Applications (SPAs)\n"    },
]

const images = [
    img1
]

const tag_line = "Hire Node.js developers to gain access to faster, real-time, and scalable applications crucial for expanding your business and providing users with an exceptional user experience.";


export default function HireNodeDeveloper() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label="Hire Node.Js Developers to Create Cutting-Edge Web Applications" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a Development Team" tag={"Our streamlined 3-step process simplifies your journey from idea to the final product. At Atlantis, we prioritize efficiency and offer the flexibility to hire a dedicated Node Js development team within 24 hours.\n"}/>
                <HireSteps />
            </div>
        </div>

        <Nodejs_resources/>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire Node.Js Developers to Enhance Your Website's Functionality</h2>
                        <p className="mt-5">In today's world, reliance on smart gadgets is ubiquitous. Mobile applications have become essential for running daily errands and helping countless businesses achieve significant milestones.</p>
                        <p className="fw-bold mt-4">A seamless user interface (UI) in your application is vital in establishing your business's reputation in the competitive market. It helps you gain credibility and builds trust among valuable customers.</p>
                        <p className="mt-5">At Atlantis Tech, our team of professional Node.js developers possesses extensive expertise in the market. They are equipped to provide services and solutions for various projects and complexities. By hiring a Node.js developer, you can harness the full benefits of Node.js technology, such as its ability to handle data-intensive tasks, lightweight nature, and scalability, to build robust applications.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our Node.js Developers" tag="Our Node.js developers bring their expertise to enhance the value of your project, helping you formulate a seamless development strategy that leads to successful execution. Discover our comprehensive Node.js development services."/>
                <HireBoxes data={whyUs}/>
            </div>
        </div>


        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
