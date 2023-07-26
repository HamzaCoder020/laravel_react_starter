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
import Copy_resources from "../components/resources/copy_resources.jsx";

const whyUs = [
    {head:"One-Stop Destination\n", content: "Our team of skilled copywriters specializes in delivering high-quality sales copywriting, blog posts, social media posts, ad copy, and newsletter writing. We offer comprehensive services to meet all your content needs.\n" },
    {head:"Proven Track Record\n", content: "Benefit from our team's 10+ years of experience in the industry. We have honed our skills and expertise to provide top-notch copywriting services that meet your unique business needs.\n" },
    {head:"Tailored Solutions:\n", content: "Hire our dedicated copywriting services to achieve customized results for your business. We are committed to boosting your sales and helping your business thrive.\n" },
]
const services = [
    {head:"Blog Writing\n", content: "Enhance your content marketing campaign and boost your SEO rankings by hiring Atlantis’ skilled content writers who deliver comprehensive blog posts.\n" },
    {head:"Website Content Writing\n", content: "Acquire accurate and SEO-friendly content tailored to your needs for all your website pages, landing pages, and homepage by hiring our dedicated content specialists.\n" },
    {head:"Sales Copywriting\n", content: "Capture your clients' attention instantly and increase your conversion rates by hiring a professional sales copywriter. Let us help you elevate your marketing game.\n" },
    {head:"Product Description Writing\n", content: "Present your products in the most compelling way possible with Atlantis Tech’s unique and engaging product descriptions. Our services enhance your customers' experience.\n" },
    {head:"Press Release Writing\n", content: "Obtain captivating and newsworthy content for your PR campaigns and media events by hiring our expert press release writers. We deliver content perfect for any media outlet.\n" },
    {head:"Newsletter Writing\n", content: "Engage your clients and improve retention rates with our professionally crafted newsletters. Let us highlight your business developments and keep your audience informed.\n" },
]



const faqs = [
    {header:"Q: How can I choose the right copywriter for my project?\n",
        body:"At Atlantis Tech, we have a diverse pool of skilled copywriters. You can select the right talent by reviewing their expertise, experience, and previous work samples. We can assist you in finding the perfect match based on your project requirements."},

    {   header:"Q: Which industries does Atlantis Tech cater to for copywriting services?\n",
        body:"Atlantis Tech provides copywriters who specialize in serving a wide range of industries and categories. Here are some of the major industries we have experience working with:\n" +
            "\n" +
            "Healthcare\n" +
            "Education\n" +
            "Agriculture\n" +
            "Automotive\n" +
            "Art & Design\n" +
            "Construction\n" +
            "Cybersecurity\n" +
            "Environment\n" +
            "Food & Beverage\n" +
            "Real Estate\n" +
            "Sports & Fitness\n" +
            "Technology\n" +
            "Marketing & Advertising\n" +
            "Parenting\n"},
    {   header:"Q: What services do your copywriters specialize in?\n",
        body:"Our team of skilled copywriters specializes in delivering high-quality sales copywriting, blog posts, social media posts, ad copy, newsletter writing, and more. We offer comprehensive services to meet all your content needs."    },

    {   header:"Q: How experienced are your copywriters?\n",
        body:"Our copywriters have over 10 years of experience in the industry. We have honed our skills and expertise to provide top-notch copywriting services that meet your unique business needs. You can trust in our proven track record."  },

    {   header:"Q: Can your copywriters generate leads and conversions for my marketing campaigns?\n",
        body:"Absolutely! Our top-notch copywriting team is committed to crafting compelling content that drives exceptional results for your marketing campaigns. They leverage industry trends, optimization strategies, and advanced segmentation techniques to maximize visibility and establish a strong brand presence, leading to increased leads and conversions."    },

    {   header:"Q: What are the day-to-day activities of a copywriting expert?\n",
        body:  "Our copywriting experts handle tasks such as social media optimization (SMO), creating social post calendars, responding to messages and comments, setting up and executing PPC campaigns, collaborating with graphic designers, developing copywriting strategies, and relaying messages and comments to the relevant team."    },

    {   header:"Q: Is copywriting effective for B2B businesses?\n",
        body:  "Yes, copywriting is effective for both B2B and B2C businesses. In the case of B2B, copywriters focus on delivering engaging social media posts that resonate with the target audience and drive business objectives."    },
]

const images = [
    img1
]

const tag_line = "Seeking a skilled copywriter to craft compelling content? Your search ends here! Our team of highly experienced professionals specializes in SEO copywriting, delivering engaging and effective content that drives remarkable conversions.\n";


export default function HireCopyWriters() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label="Hire Copywriters to Create Engaging Content" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a Copywriters Team" tag={"Our streamlined 3-step process simplifies your journey from idea to the final product. At Atlantis, we prioritize efficiency and offer the flexibility to hire a dedicated Node Js development team within 24 hours.\n"}/>
                <HireSteps />
            </div>
        </div>

        <Copy_resources/>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire Copywriters to Generate Leads and Conversions</h2>
                        <p className="mt-5">Introducing our top-notch copywriting team, committed to crafting compelling content that drives exceptional results for your marketing campaigns. With a keen eye for industry trends and optimization strategies, our experts specialize in tailoring messages that resonate with specific target audiences, leveraging advanced segmentation techniques and personalized storytelling to maximize visibility and establish a strong brand presence.</p>
                        <p className="fw-bold mt-1">Equipped with cutting-edge analytics tools, our copywriters gain invaluable insights into campaign performance, enabling them to fine-tune strategies and consistently enhance outcomes. Their proficiency in campaign management ensures that you can expect superior results and cost savings, thanks to meticulously optimized copywriting techniques.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our Copywriters" tag="With profound expertise and extensive experience, our Copywriterss possess the skills necessary to deliver high satisfaction within fixed timelines."/>
                <HireBoxes data={whyUs}/>
                <p>With Atlantis Tech, you're not just hiring Copywriters; you're securing a partnership with a team committed to propelling your business to new heights. Let us help you transform your vision into reality.</p>
            </div>
        </div>
        <div className="Our_services py-5">
            <div className="container">
                <HeadingTag heading="Services Offered by Our Copywriters" tag="Unlock the power of captivating copy for your business with our expertise. At Atlantis Tech, we offer a range of services to meet your copywriting needs. Trust us to deliver exceptional copy that captures attention and drives results."/>
                <HireBoxes data={services}/>
                <p>By availing our Copywriters services, you can benefit from the expertise of our copywriters professionals who are committed to delivering exceptional results and helping your business thrive in the digital landscape.</p>
            </div>
        </div>


        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
