import HireBoxes from "../components/HireBox/HireBoxes.jsx";
import HeadingTag from "../components/HeadingTag.jsx";

import globe from "../../images/home/ServiceIcons/globe.png";
import app from "../../images/home/ServiceIcons/app-development.png";
import ai from "../../images/home/ServiceIcons/artificial-intelligence.png";
import test from "../../images/home/ServiceIcons/testing.png";
import digital from "../../images/home/ServiceIcons/bullhorn.png";
import brand from "../../images/home/ServiceIcons/ux-design.png";

export default function ExpenseSec() {



    const hire = [
        {img:globe, head:"Hire a Web Developer", content:"Are you searching for a reliable software development company? Look no further! Atlantis Tech  offers secure software solutions for any device, browser, and operating system. Hire a web developer today to bring your ideas to life."},
        {img:app, head:"Hire an App Developer", content:"We have adept app developers who can help you create innovative and user-friendly mobile or web applications that meet your company's needs. We can build custom apps from scratch or modify existing ones to suit your business."},
        {img:test, head:"Hire a Digital Marketer", content:"Atlantis Marketing offers expert digital marketers specializing in email, content, inbound, social media, SEO, PR, and PPC. We deliver top-performing marketers to help your business grow."},
        {img:ai, head:"Hire a UI/UX Designer", content:"Our skilled UI/UX designers can help you develop responsive web pages and select interactive elements to display on your website. Our designers have in-depth knowledge of HTML and CSS to provide top-notch user experiences."},
        {img:digital, head:"Hire a Copywriter", content:"Need help crafting compelling content that drives results? Atlantis Marketing has got you covered. Our experienced copywriters can create engaging copy for your website, marketing materials, and more."},
        {img:brand, head:"Hire a Customer Service Specialist", content:"At Atlantis Marketing, we understand the importance of customer satisfaction. Our customer service specialists are skilled at handling customer inquiries, complaints, and feedback to ensure your customers have a positive experience with your business."},
    ];

    return <div className="container my-5">

            <HeadingTag heading={"Save Your Time and Budget"} tag={"Explore top talent from around the world and streamline your hiring process with Atlantis Tech . Whether you're in need of a skilled web developer, app developer, UI/UX designer, digital marketer, copywriter, or customer service specialist, we've got you covered. "}/>
            <HireBoxes data={hire} />
        </div>
}
