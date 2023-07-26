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
import Email_resources from "../components/resources/email_resources.jsx";

const whyUs = [
    {head:"One-Stop Destination\n", content: "From engaging email copywriting to effective newsletter creation and automation workflows, we offer a one-stop destination to drive impactful results and maximize your campaign's success." },
    {head:"Proven Track Record\n", content: "With over 10 years of industry experience, our team has established a strong track record in delivering successful email marketing campaigns. \n" },
    {head:"Tailored Solutions\n", content: "Partner with our dedicated email marketing specialist to receive customized strategies that align with your business goals.\n" },
]

const services = [
    {head:"Customized Email Campaigns\n", content: "Our email marketing experts craft tailor-made campaigns that align with your brand's objectives, ensuring maximum engagement and conversion rates.\n" },
    {head:"Targeted Audience Segmentation\n", content: "We employ advanced segmentation techniques to divide your subscriber base into specific groups, enabling personalized messaging that resonates with each segment's unique interests and preferences.\n" },
    {head:"Compelling Content Creation \n", content: "Our experts excel at creating compelling email content that grabs attention, evokes interest, and compels recipients to take action, driving higher click-through and conversion rates.\n" },
    {head:"Responsive Email Design\n", content: "We optimize your email templates for various devices and screen sizes, ensuring a seamless and visually appealing experience for recipients, regardless of the device they use.\n" },
    {head:"Automated Workflows\n", content: "Our experts set up automated workflows that deliver timely and relevant emails based on predefined triggers, allowing you to engage with your audience at critical touchpoints throughout their customer journey.\n" },
    {head:"Performance Analytics and Reporting\n", content: "Gain valuable insights into your email campaign's open rates, click-through rates, conversions, and subscriber behavior, empowering data-driven decisions for continuous improvement.\n" },
]



const faqs = [
    {header:"Q: What specific expertise does Atlantis Tech’s email marketing team possess?\n",
        body:" Our email marketing team at Atlantis Tech consists of experts who specialize in creating engaging email campaigns, optimizing deliverability, implementing segmentation strategies, and leveraging personalized messaging. They are skilled in crafting compelling content, designing responsive email templates, setting up automation workflows, and analyzing campaign performance."},

    {   header:"Q: How will Atlantis Tech's email marketing team help boost engagement and drive sales?\n",
        body:"Our email marketing team employs tailored strategies to increase customer engagement and drive sales. They create personalized campaigns based on target audience segmentation, deliver captivating content that compels recipients to take action, optimize email templates for different devices, and set up automated workflows that engage customers at critical touchpoints. Their expertise ensures higher click-through rates and conversions."},

    {   header:"Q: Can Atlantis Tech's email marketing team integrate with our existing marketing efforts?\n",
        body:"Absolutely! Our email marketing team can seamlessly integrate with your existing marketing efforts. They will collaborate with your marketing team to align email campaigns with your overall marketing strategy, ensuring consistent messaging and branding. They can also integrate email marketing with other channels, such as social media, to maximize the impact and effectiveness of your marketing efforts.\n"    },

    {   header:"Q: How does Atlantis Tech ensure that email campaigns are targeted and reach the right audience?\n",
        body:"Atlantis Tech's email marketing team utilizes advanced audience segmentation techniques. They analyze your subscriber base, segment it based on specific criteria such as demographics, preferences, and past interactions. This allows for highly targeted messaging that resonates with each segment. Additionally, our team continuously refines targeting based on campaign performance and customer insights."},

    {   header:"Q: What kind of reporting and analytics can we expect from Atlantis Tech's email marketing team?\n",
        body:"Our email marketing team provides comprehensive reporting and analytics to measure the success of your campaigns. You can expect detailed insights on open rates, click-through rates, conversions, subscriber behavior, and more. They leverage advanced analytics tools to track key metrics, allowing you to make data-driven decisions and continuously improve your email marketing strategy."},

    {   header:"Q: How quickly can Atlantis Tech assemble an email marketing team for our business?\n",
        body:  "At Atlantis Tech, we prioritize efficiency and understand the importance of timely execution. We can assemble a dedicated email marketing team for your business within 24 hours. Our streamlined process ensures that you have the right resources onboarded swiftly, allowing you to kickstart your email marketing initiatives without delay.\n"    },
    {   header:"Q: What level of customization and support can we expect from Atlantis Tech's email marketing team?\n",
        body:  "Our email marketing team provides tailored solutions that align with your business goals. They work closely with you to understand your unique requirements, branding guidelines, and target audience. They offer support throughout the campaign creation and execution process, providing insights, recommendations, and regular communication to ensure your satisfaction and campaign success."    }
]

const images = [
    img1
]

const tag_line = "Email marketing requires a dedicated strategy to boost customer engagement, CTR, and deliverability. Elevate your email marketing game with a dedicated email marketing expert from Atlantis Tech. Our specialists specialize in tailored strategies, engaging copy, and precise targeting to boost your conversions. \n";


export default function HireEmailExpert() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="">
        <HeroSection label="Hire Email Marketing Experts to Boost Engagement and drive sales" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="php_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Assemble a Email Marketing Team" tag={"Our efficient 3-step process simplifies your path from conception to the finished product. At Atlantis Tech, we prioritize efficiency and provide the flexibility to onboard a dedicated social media marketing expert within 24 hours.\n"}/>
                <HireSteps />
            </div>
        </div>

        <Email_resources/>

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Hire Email Marketing Experts to Increase ROI</h2>
                        <p className="my-2">Our email marketing experts are dedicated to delivering data-driven campaigns that generate high-quality leads and conversions. With a deep understanding of industry trends and optimization techniques, they tailor campaigns to target specific audiences, utilizing segmentation and personalized messaging for enhanced visibility and brand recognition.</p>
                        <p className="fw-bold">Access to advanced analytics tools empowers them to gain valuable insights, refine campaigns, and continually improve performance. With their expertise in campaign management, you can expect better results and cost savings through optimized email marketing strategies.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Expertise of Our Social Media Marketers" />
                <HireBoxes data={whyUs}/>
                <p className="my-2">
                    With Atlantis BPO, you're not just hiring email marketing experts; you're securing a partnership with a team committed to propelling your business to new heights. Let us help you transform your vision into reality.                </p>
            </div>
        </div>

        <div className="Our_services py-5">
            <div className="container">
                <HeadingTag heading="Top-Notch Services by Our Email Marketing Experts" tag="Achieve remarkable results with our budget-friendly email marketing services. Our experts maximize ROI through a data-driven approach, delivering personalized campaigns that drive engagement and conversions."/>
                <HireBoxes data={services}/>
                <p className="my-2">By availing our Email marketing services, you can benefit from the expertise of our Email marketing experts who are committed to delivering exceptional results and helping your business thrive in the digital landscape.</p>
            </div>
        </div>


        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!\n"}/>

    </div>;
}
