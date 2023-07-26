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
import SEO_resources from "../components/resources/seo_resources.jsx";

const whyUs = [
    {head:"Guaranteed Results\n", content: "Our team of highly skilled and experienced SEO professionals follows a robust implementation process, ensuring exceptional results. We specialize in delivering sustainable outcomes.\n" },
    {head:"SEO Audit\n", content: "To achieve success in SEO, it is crucial to continuously evaluate strategies. Our SEO professionals meticulously analyze data to enhance website traffic and generate high-quality leads.\n" },
    {head:"Flexible Plans\n", content: "Our feature-rich and cost-effective SEO plan offers a wide range of services. Hire our SEO experts for on-page and off-page optimization, eCommerce solutions, backlink creation, and effective branding services.\n" },
]

const services = [
    {head:"Competitive Analysis\n", content: "Our meticulous competitive analysis methodology provides a systematic and cost-effective roadmap to boost your business visibility, surpassing your competitors.\n" },
    {head:"SEO Content Strategy\n", content: "We formulate a market-competitive SEO content strategy aimed at generating increased organic traffic. By producing SEO-driven content relevant to your industry, we enhance brand promotion and visibility.\n" },
    {head:"Digital Strategy & Comprehensive Insights\n", content: "Our team of SEO experts possesses technical proficiency in decoding SEO terminology, enabling us to develop a cutting-edge strategy for achieving defined objectives\n" },
    {head:"On-page and Off-page Optimization\n", content: "Through an on-page SEO strategy, we deliver top-notch content accompanied by optimized meta tags, titles, and descriptions. Our experts excel in off-page optimization by building high-quality links and executing targeted traffic campaigns.\n" },
    {head:"In-depth SEO Report\n", content: "Our approach entails creating a comprehensive SEO report based on an impartial analysis of ongoing campaigns. This report provides valuable insights for informed decision-making.\n" },
    {head:"Keyword Research\n", content: "Equipped with exceptional skills, extensive market research, and proficiency in multiple tools, our leading SEO professionals identify highly competitive keywords to effectively outperform your rivals.\n" },
]



const faqs = [
    {header:"Q. How many industries is Atlantis Tech currently serving?\n",
        body:"Atlantis Tech is serving a wide range of industries, including but not limited to:\n" +
            "Healthcare\n" +
            "Retail IT solutions\n" +
            "Travel and Tourism\n" +
            "Fintech\n" +
            "Logistics and Distribution\n" +
            "Media and Entertainment\n" +
            "Real Estate\n" +
            "eLearning\n"},

    {   header:"Q. How is Atlantis Tech different from other SEO services?\n",
        body:"Atlantis distinguishes itself from other SEO services through its comprehensive approach, customized strategies, and deep industry expertise. We prioritize understanding your business goals and tailor our SEO solutions accordingly, ensuring optimal results and a competitive edge in the market."},

    {   header:"Q. What is SEO, and why is it important for my business?\n",
        body:"SEO stands for Search Engine Optimization. It is important for businesses as it improves website visibility, organic rankings, and drives organic traffic, leading to higher conversions and business growth."    },

    {   header:"Q. What is the role of backlinks in ranking your website?\n",
        body:"Backlinks are external links from other websites that point to your website. They play a role in website ranking by indicating authority and credibility."  },

    {   header:"Q. How much time is essential for effective SEO?\n",
        body:"The time required for effective SEO varies but on average, it may take 3 to 4 months to achieve desired rankings based on factors like industry competitiveness and optimization efforts."    },

    {   header:"Q. Define Google Analytics.\n",
        body:  "Google Analytics is a web analytics tool by Google that provides data and insights on website traffic, user behavior, conversions, and other metrics, helping businesses make data-driven decisions to improve performance.\n"    }
]

const images = [
    img1
]

const tag_line = "We are committed to delivering top-notch SEO services that effectively drive traffic, generate leads, and increase sales. Our highly skilled SEO specialists are extensively trained to ensure your online visibility is optimized, enabling you to maintain a competitive edge.";


export default function HireSeoExpert() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label=" Hire SEO Experts to Improve Your Website's Search Engine Rankings" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a SMM Team" tag={"Our efficient 3-step process simplifies your path from conception to the finished product. At Atlantis Tech, we prioritize efficiency and provide the flexibility to onboard a dedicated social media marketing expert within 24 hours.\n"}/>
                <HireSteps />
            </div>
        </div>

        <SEO_resources/>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire an SEO to Develop Effective Link Building Strategies</h2>
                        <p className="fw-bold my-2">We are a highly competitive company providing top-notch SEO services through our team of expert professionals. Our services include:</p>
                        <p className="">Enhance your business visibility by hiring our skilled SEO experts.</p>
                        <p>Improve your social presence with the assistance of our dedicated link-building experts.</p>
                        <p> Our trained SEO experts offer unique and effective solutions tailored to your specific needs.</p>
                        <p> We are committed to implementing efficient SEO strategies that align with your business objectives.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our SEO Experts" tag="With profound expertise and extensive experience, our SEOs possess the skills necessary to deliver high satisfaction within fixed timelines."/>
                <HireBoxes data={whyUs}/>
                <p className="my-2">
                    With Atlantis Tech, you're not just hiring SEO Experts; you're securing a partnership with a team committed to propelling your business to new heights. Let us help you transform your vision into reality.
                </p>
            </div>
        </div>

        <div className="Our_services py-5">
            <div className="container">
                <HeadingTag heading="A Comprehensive SEO Package" tag="We present a highly efficient team of SEO service professionals who are dedicated to delivering impeccable work and assured outcomes. Our workflow follows a seamless process that combines expertise and adaptability to instill confidence in our clients and successfully accomplish specific objectives."/>
                <HireBoxes data={services}/>
                <p className="my-2">By availing our SEO services, you can benefit from the expertise of our SEO professionals who are committed to delivering exceptional results and helping your business thrive in the digital landscape.</p>
            </div>
        </div>


        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
