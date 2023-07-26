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
import PPC_resources from "../components/resources/ppc_resources";

const whyUs = [
    {head:"One-Stop Destination\n", content: "Our team consists of certified and dedicated PPC experts who specialize in delivering high-quality website design, development, and digital marketing services.\n" },
    {head:"Receive a Personalized Plan\n", content: "We recognize the distinctiveness of your business plan and tailor our marketing approach accordingly. Our understanding of your growth model enables us to deliver the desired outcomes.\n" },
    {head:"Tailored Solutions\n", content: "Choose our dedicated services to achieve tailored results for your business. We are renowned for delivering guaranteed results and boosting your business sales.\n" },
]

const services = [
    {head:"PPC Evaluation Services\n", content: "We provide precise evaluation services for PPC campaigns, meticulously examining and calculating reach. The comprehensive reports offer valuable insights into the potential of your PPC campaigns.\n" },
    {head:"Social Media Advertising\n", content: "Our PPC experts excels in managing social media accounts across various platforms such as LinkedIn, Facebook, Twitter, Instagram, and YouTube. Partner with us to significantly enhance your online exposure while saving valuable time and budget.\n" },
    {head:"Targeted Campaigns\n", content: "With PPC's inherent adaptability and scalability, our experts create targeted campaigns that yield optimal results for businesses of all sizes.\n" },
    {head:"Ads Management\n", content: "Our professionals analyze and optimize ad campaigns to generate high conversion rates and maximize the impact of your advertising efforts.\n" },
    {head:"Video Ads Management\n", content: "Irrespective of your company's size, our PPC experts effectively manage clients' video ads, elevating their global visibility and driving sales. \n" },
    {head:"PPC Audit\n", content: "Looking to enhance the performance of your ads? Our team of PPC experts is here to conduct thorough audits and improve the overall effectiveness of your PPC campaigns. \n" },
]



const faqs = [
    {header:"Q: Do you stay updated with the latest trends and optimization techniques in the PPC industry?\n",
        body:"Yes, we prioritize staying informed about the latest trends and optimization techniques in the PPC industry. Our goal is to provide cutting-edge strategies and approaches to maximize the effectiveness of PPC campaigns."},

    {   header:"Q: Do you offer PPC-related services or products?\n",
        body:"Yes, we offer a range of services and products related to PPC (Pay-Per-Click). Our offerings include campaign setup and management, keyword research, ad copywriting, landing page optimization, performance tracking, and strategic consulting. We aim to provide comprehensive solutions to help clients achieve their PPC goals."},

    {   header:"Q: How do I start a new PPC campaign?\n",
        body:"Starting a new PPC campaign involves a few key steps. First, it's important to define your campaign objectives and target audience. Next, conduct thorough keyword research to identify relevant and high-performing keywords. Set up your PPC account on the chosen advertising platform, create compelling ad copy, and design effective landing pages. Monitor the campaign closely, make necessary optimizations, and track its performance to ensure success."    },

    {   header:"Q: What is White Label Google Ads management?\n",
        body:"White Label Google Ads management refers to a service where we provide Google Ads campaign management under your brand name. We act as your behind-the-scenes PPC team, handling campaign setup, optimization, and reporting, while you maintain a direct relationship with your clients. This allows you to offer PPC services without having to invest in building an in-house team or expertise."},

    {   header:"Q: Which industries do you cater to for running PPC campaigns?\n",
        body:"We cater to a wide range of industries for running PPC campaigns. Our expertise covers sectors such as e-commerce, technology, healthcare, finance, travel, real estate, education, and many more. Regardless of the industry, we tailor our PPC strategies to align with the unique goals and requirements of each client."},

    {   header:"Q: What expertise do your PPC experts possess?\n",
        body:  "Our PPC experts are highly skilled and experienced professionals in the field. They possess in-depth knowledge of various advertising platforms, including Google Ads, Bing Ads, and social media advertising channels. They are proficient in keyword research, ad copywriting, campaign optimization, conversion tracking, and data analysis. Our experts stay updated with the latest trends and best practices in PPC to deliver exceptional results.\n"    },
    {   header:"Q: Do you guarantee PPC campaign conversions?\n",
        body:  "While we cannot offer guarantees in terms of specific conversion outcomes for PPC campaigns, we strive to maximize campaign performance and generate optimal results. Our team employs proven strategies and continuous optimization techniques to increase conversion rates, improve ad targeting, and enhance overall campaign effectiveness. We focus on data-driven decision-making and aim to deliver the best possible return on investment for our clients' PPC campaigns."    }
]

const images = [
    img1
]

const tag_line = "Elevate your online advertising with a dedicated PPC expert from Atlantis Tech. Our specialists create custom strategies to boost your business in the digital world. From lead generation to conversions, we maximize your ROI through targeted PPC campaigns.";


export default function HirePPCExpert() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label="Hire PPC Experts and Watch Your Conversions Soar" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a PPC Expert Team" tag={"Our efficient 3-step process simplifies your path from conception to the finished product. At Atlantis Tech, we prioritize efficiency and provide the flexibility to onboard a dedicated social media marketing expert within 24 hours.\n"}/>
                <HireSteps />
            </div>
        </div>

        <PPC_resources/>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire PPC Experts for Data-Driven Advertising Success</h2>
                        <p className="my-2">Our PPC experts are skilled in developing effective campaigns that generate high-quality leads and conversions while maintaining an efficient budget. They stay updated on the latest trends and optimization techniques in the industry. By tailoring campaigns to specific target audiences and utilizing different targeting options, such as location-based and keyword-targeted campaigns, they increase visibility and brand recognition with precision.</p>
                        <p className="fw-bold">Access to advanced statistical analytics tools enables them to gain valuable insights, refine campaigns, and improve performance over time. Their experienced campaign management ensures better results and cost savings through optimized ad spending.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our PPC Experts" tag="With profound expertise and extensive experience, our SEOs possess the skills necessary to deliver high satisfaction within fixed timelines."/>
                <HireBoxes data={whyUs}/>
                <p className="my-2">
                    With Atlantis Tech, you're not just hiring PPC Experts; you're securing a partnership with a team committed to propelling your business to new heights. Let us help you transform your vision into reality.
                </p>
            </div>
        </div>

        <div className="Our_services py-5">
            <div className="container">
                <HeadingTag heading="Marketing services by Our PPC Experts" tag="Achieve top rankings in SERPs with our budget-friendly Pay Per Click services. Our AdWords PPC experts deliver excellent results, maximizing your ROI through a data-driven approach"/>
                <HireBoxes data={services}/>
                <p className="my-2">By availing our PPC services, you can benefit from the expertise of our PPC experts who are committed to delivering exceptional results and helping your business thrive in the digital landscape.</p>
            </div>
        </div>


        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
