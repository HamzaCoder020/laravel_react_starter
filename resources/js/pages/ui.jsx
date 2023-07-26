import img1 from '../../images/home/developer3.png';
import HeroSection from "../components/HeroSec/HeroSection.jsx";
import React, { useState, useEffect } from 'react';
import FadeInSlider from '../components/HeroSec/FadeInSlider.jsx';
import HeadingTag from "../components/HeadingTag.jsx";
import HireSteps from "../components/hireSteps/HireSteps.jsx";
import ui_web from "../../../public/assets/images/ui_website.png";
import abid from "../../../public/assets/images/abid.png";
import shah from "../../../public/assets/images/shah.png";
import HireBoxes from "../components/HireBox/HireBoxes.jsx";
import Accordian from "../components/accordians/Accordians.jsx";
import "../components/hireSteps/HireSteps.css";
import UiResources from "../components/resources/ui_resources.jsx";


const whyUs = [
    {head:"The Best of the Best", content: "Our UI/UX design engineers are handpicked after a rigorous hiring procedure, ensuring we have the crème de la crème. With an average of 5 years of professional experience, our design professionals are ready to bring their expertise to your projects, delivering exceptional results." },
    {head:"Role-Specific Designers", content: "Say goodbye to the hassle of manually sorting through profiles. Our team of senior managers takes the guesswork out of the equation. They carefully select expert designers who precisely match your specific needs, ensuring a perfect fit for your project." },
    {head:"Start within 24 hours", content: "We have full confidence in our abilities and the quality of our work. To demonstrate our commitment and efficiency, we offer a free consultation and an amazing deal to kickstart your project. Contact us today, and within just 24 hours, we'll have you on track to project success." }
]

// const resource = [
//     {img: abid, head: "Abid Saif", content: "Abid Saif is a creative genius adept at creating visually captivating designs with a keen eye for detail.\n" +
//             "\n" +
//             "Photoshop, Figma, Adobe Illustrator, Invision, Zeplin, Adobe Xd"},
//     {img: shah, head: "Shah Khan", content: "Shah Khan is expert in Photoshop, Illustrator, InDesign, XD, Figma, InVision, Zeplin, Ice, and ProtoPie"}
// ]

const faqs = [
    {header:"How do I hire a UI/UX Designer or team at Atlantis Tech?",
        body:"Hiring a UI/UX designer or team at Atlantis Tech is simple. Reach out to us via our Contact Us page or directly through our email or phone. Our dedicated talent specialist will discuss your project needs and suggest the best suitable talent for you. After you review and approve the choice, we can proceed with the engagement."},

    {   header:"Can I hire a UI/UX designer on an hourly basis?",
        body:"Yes, at Atlantis Tech, we offer flexible hiring models.  If you have a clear understanding of the tasks for the designer, you can hire a UI/UX designer on an hourly, part-time, or full-time basis depending on your project requirements."
    },
    {   header:"Why do we have to hire dedicated designers?",
        body:"Hiring dedicated designers ensures that you have a team or individual who is fully focused on your project. This leads to better understanding, faster turnaround times, and high-quality results. It also provides better cost efficiency as you only pay for the work done.\n"    },

    {   header:"How are your UI/UX designers helpful for my project?",
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

const tag_line = "Design Marvels at Your Service: Hire Atlantis' UI/UX Dream Team and Create Magic\n At Atlantis, we offer a team of talented UI/UX designers for hire, committed to creating user-friendly mobile and web applications. Our expert UI/UX designers \n focus on the technical design details to ensure your project goals are met";

export default function Ui() {
   /* const [resource, setResource] = useState([]);

    useEffect(() => {
        const api_url = 'http://localhost/laravel_react_starter/api/get_employee?page=PHP';
        fetch(api_url)
            .then(response => response.json())
            .then(data => setResource(data.employee_list));
        console.log('setResource 2 = ',resource, api_url);
    }, []);

    useEffect(() => {
        console.log('resource chage ',resource)
    }, [resource]);
*/

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return <div className="">
        <HeroSection label="Hire a UI/UX Designer for Seamless
                Digital User Experience" tagline={tag_line} >
            <FadeInSlider images={images}/>
        </HeroSection>
        <div className="ui_hire_steps my-5">
            <div className="container">
                <HeadingTag heading="Steps to Hire a UI/UX Design Team" tag="Our 3-step process simplifies your journey from concept to a polished product. At Atlantis, we prioritize efficiency and offer the flexibility to hire a dedicated UI/UX design team within 24 hours."/>
                <HireSteps />
            </div>
        </div>
        <UiResources />
       {/* <div className="ui_resource_sec">
            <div className="container">
                <HeadingTag heading="UI/UX Designers You Can Hire" tag="Hire a UI/UX designer for exceptional design solutions. Our talented designers deliver top-notch results, ensuring your project is completed on time and to the highest standards."/>
                <div className="resource_body">
                    <UiResources data={resource}/>
                </div>
            </div>
        </div>*/}

        <div className="boost_convesion_sec py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2>Boost Conversions by Hiring
                            Expert UI/UX Designers</h2>
                        <p className="mt-5">At Atlantis, we understand your need for a highly engaging website or mobile application.
                            By hiring expert UI/UX designers you can improve the overall
                            user experience of your website or mobile application, making it more engaging and conversion-focused. </p>
                            <p className="fw-bold mt-4"> Our proactive team of UI/UX designers is equipped with modern plans, intuitive user interfaces, and remarkable user experiences.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={ui_web} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>


        <div className="why_choose_design py-5">
            <div className="container">
                <HeadingTag heading="Why Choose Our UI/UX Designers?" tag="Atlantis, a leading provider of website development, app UI/UX designing and development, and digital marketing services."/>
                <HireBoxes data={whyUs}/>
            </div>
        </div>

        <div className="faqs_sec">
            <Accordian data={faqs} heading="Curious To Know More?" tag="Take a peek at our FAQ section below to find valuable insights about our company, products or services. Feel free to reach out to us if you have any more questions or need further information. We're here to assist you!" />
        </div>

    </div>;
}
