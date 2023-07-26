import "../apart_us/apartus.css"
import apart1 from "../../../../images/whatwedo/apart/img (1).jpg";
import apart2 from "../../../../images/whatwedo/apart/img (2).jpg";
import apart3 from "../../../../images/whatwedo/apart/img (3).jpg";
import apart4 from "../../../../images/whatwedo/apart/img (4).jpg";
import apart5 from "../../../../images/whatwedo/apart/img (5).jpg";
import apart6 from "../../../../images/whatwedo/apart/img (6).jpg";
import HeadingTag from "../../HeadingTag.jsx";

const  apart = [
    {
        projects : apart1,
        title : "Top Experts",
        body: "We are a team of 50+ experts specializing in modern software development, design, marketing, and content creation. With our proficiency in various programming languages, user-friendly design principles, we provide comprehensive solutions tailored to meet your specific needs and drive growth for your business.",
    },
    {
        projects : apart2,
        title : "Qualitative Performance",
        body: "We are dedicated to delivering qualitative performance in all aspects of our work. From software development to design, marketing, and content creation, we prioritize quality at every step. By adhering to rigorous standards and implementing best practices, we consistently exceed expectations and achieve outstanding outcomes.",
    },
    {
        projects : apart3,
        title : "Trust and Responsibility",
        body: "Building trust is the foundation of our relationships with clients. We take our responsibility seriously, maintaining open and transparent communication, meeting deadlines, and ensuring confidentiality. You can rely on us to handle your projects with utmost professionalism and to prioritize your needs and objectives.",
    },
    {
        projects : apart4,
        title : "Commitment to Excellence",
        body: "Excellence is the driving force behind our work. We are committed to continuously improving our skills, processes, and deliverables to provide exceptional solutions. By embracing a culture of continuous learning and staying updated with the latest industry advancements, we deliver excellence in everything we do.",
    },
    {
        projects : apart5,
        title : "Going the Extra Mile",
        body: "We go above and beyond to meet and exceed your expectations. Our team is always willing to cover the extra mile to ensure your satisfaction. Whether it's providing additional support, implementing custom features, or offering post-launch assistance, we are dedicated to going that extra mile to deliver outstanding results.",
    },
    {
        projects : apart6,
        title : "Entrepreneurial Approach",
        body: "With an entrepreneurial approach, we bring a fresh perspective to every project. We combine creativity, innovation, and strategic thinking to tackle challenges and explore new opportunities. Our team embraces an entrepreneurial mindset, enabling us to find unique solutions that drive growth and success for your business.",
    },
];

const Apartbox = ({ data }) => (

    <div className="row">
        {data.map((item, index) => (
            <div className="col-md-4">
                <div className="project_box d-flex justify-content-center" key={index}>
                    <img src={item.projects} className="align-self-center" alt="Project Logo"/>
                    <div className="eye_overlay">
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                    </div>
                </div>
                <h4 className="text-center py-3">{item.title}</h4>
            </div>
        ))}
    </div> );

export default function Apartus() {
    return <div className="apart_us my-5">
                <div className="container">
                    <HeadingTag heading="What Sets us Apart?"/>
                    <Apartbox data={apart} />
                </div>
        </div>;
}
