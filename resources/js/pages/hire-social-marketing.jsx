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
import SSM_resources from "../components/resources/ssm_resources.jsx";

const whyUs = [
    {head:"Partner with Certified Experts\n", content: "Our commitment is to maintain a highly skilled and certified Social Media Marketing (SMM) team that continually enhances their expertise through education in sales strategies. \n" },
    {head:"Receive a Personalized Plan\n", content: "We recognize the distinctiveness of your business plan and tailor our marketing approach accordingly. Our understanding of your growth model enables us to deliver the desired outcomes.\n" },
    {head:"Explore New Strategies", content: "In a rapidly evolving digital landscape, we take proactive measures to stay ahead. You can rely on our innovative mindset and progressive methodologies to steer your business forward.\n" },
]

const services = [
    {head:"Facebook Marketing Services:\n", content: "Our professional SMM experts can assist you in reaching your target customers and spreading brand awareness through effective Facebook marketing strategies.\n" },
    {head:"LinkedIn Marketing Services:\n", content: "Our LinkedIn marketing services focus on generating B2B leads and driving significant sales volume for your business.\n" },
    {head:"Pinterest Marketing Services:\n", content: "By leveraging social networking platforms like Pinterest, you can automatically boost your brand's growth within a specific timeframe and target audience.\n" },
    {head:"Instagram Marketing Services:\n", content: "Our SMM experts will work diligently to enhance your brand's visibility on Instagram and increase the number of followers, ultimately contributing to your brand's success.\n" },
    {head:"YouTube Marketing Services:\n", content: "Our expertise in YouTube marketing covers various aspects, including video optimization, analysis, production, and advertising, to maximize your reach and engagement.\n" },
    {head:"Twitter Marketing Services:\n", content: "Building a strong relationship with your audience is crucial, and our Twitter marketing tactics are designed to help you convert your audience into loyal customers. \n" },
]



const faqs = [
    {header:"Q. What are the key skills of your SMM Experts for hire?\n",
        body:"Our expert Social Media Experts possess the following skills:\n" +
            "Communication Skills\n" +
            "Design Making Expertise\n" +
            "Storytelling Proficiency\n" +
            "Analytical Skills\n" +
            "Marketing and Content Creation Abilities\n" +
            "Research and Reporting Capabilities\n"},

    {   header:"Q. When is the appropriate time to hire a social media marketing expert?\n",
        body:"Consider the following scenarios before deciding to hire an SMM expert:\n" +
            "If you manage multiple business accounts.\n" +
            "If you have daily posting requirements but lack the time.\n" +
            "If you are a public figure (Celebrity, Entrepreneur, Politician, etc.) and need to maintain an up-to-date social profile while coordinating with PR activities.\n" +
            "If your social page receives substantial comments and interactions from fans.\n"},

    {   header:"Q. What are the day-to-day activities of an SMM expert?\n",
        body:"Our SMM experts handle the following tasks for one or more projects:\n" +
            "Social Media Optimization (SMO)\n" +
            "Creating social post calendars (Text, Image, Content curation)\n" +
            "Responding to messages and comments, forwarding relevant ones to the team when necessary\n" +
            "Setting up and executing PPC campaigns\n" +
            "Collaborating with graphic designers to create engaging social media images\n" +
            "Creating social media profiles on chosen networking sites\n" +
            "Developing social media marketing strategies\n" +
            "Relaying messages and comments to the relevant team\n"    },

    {   header:"Q. What should I expect from an expert SMM?\n",
        body:"A professional SMM expert will assist you with:\n" +
            "\n" +
            "Modern techniques for social auditing, traffic tracking, analytics, and campaign creation\n" +
            "Complete control over budget, target audience, content, time, and network in social media marketing\n" +
            "Delivering project management processes with a client-centric approach\n" +
            "Implementing simple processes to drive sales and conversions\n"  },

    {   header:"Q. What is your strategic USP in Social Media Marketing?\n",
        body:"Our strategic USPs in Social Media Marketing include:\n" +
            "15 years of experience\n" +
            "Utilization of the latest tools and trends\n" +
            "Facilitating significant interaction between brands and clients\n" +
            "Generating quality traffic\n" +
            "Competitive rates\n" +
            "Quick response\n"    },

    {   header:"Q. Will your SMM expert respond to comments and queries?\n",
        body:  "Yes, our expert SMM professional is trained to respond to customer comments and queries, ensuring better engagement and strengthening customer retention."    },

    {   header:"Q. Is Social Media Marketing effective for B2B businesses?\n",
        body:  "Social Media Marketing is effective for both B2B and B2C businesses. In the case of B2B, SMM focuses on delivering engaging social media posts."    }
]

const images = [
    img1
]

const tag_line = "Engage a social media marketing specialist from Atlantis Tech to secure top social media platforms. Our expertise lies in executing tailored marketing strategies, ensuring your business thrives in a competitive market.\n";


export default function HireSocialMarketing() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label=" Hire Social Media Marketers to Boost Online Presence" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a SMM Team" tag={"Our efficient 3-step process simplifies your path from conception to the finished product. At Atlantis Tech, we prioritize efficiency and provide the flexibility to onboard a dedicated social media marketing expert within 24 hours.\n"}/>
                <HireSteps />
            </div>
        </div>

        <SSM_resources/>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire a SMM to Generate Leads and Conversions</h2>
                        <p className="my-2">Experience exponential growth and enhanced brand visibility with our team of expert social media marketers. We offer comprehensive social media management services tailored to your business needs, employing cutting-edge strategies and campaigns to drive brand awareness, conversions, and leads. Our hand-picked SMM experts boast 5+ years of experience working with clients worldwide.</p>
                        <p className="fw-bold mt-1">Our state-of-the-art social media marketing campaigns are meticulously crafted to transform your audience into loyal customers. Our primary objective is to propel your business forward by amplifying your online presence and effectively promoting your brand and services. Rest assured, we are committed to aligning our efforts with your brand's vision, ensuring the development and expansion of your social media footprint.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Marketing services by Our SMM" tag="Our experts are adept at designing and implementing strategies that effectively expand your business's digital presence and grow your audience. We offer a range of services to enhance your social media presence, including:"/>
                <HireBoxes data={whyUs}/>
                <p className="my-2">
                    With Atlantis Tech, you're not just hiring Social Media Marketers; you're securing a partnership with a team committed to propelling your business to new heights. Let us help you transform your vision into reality.
                </p>
            </div>
        </div>

        <div className="Our_services py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our Social Media Marketers" tag="With profound expertise and extensive experience, our SMMs possess the skills necessary to deliver high satisfaction within fixed timelines."/>
                <HireBoxes data={services}/>
                <p className="my-2">
                    By availing our SMM services, you can benefit from the expertise of our SMM professionals who are committed to delivering exceptional results and helping your business thrive in the digital landscape.
                </p>
            </div>
        </div>


        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
