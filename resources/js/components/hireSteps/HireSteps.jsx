import "./HireSteps.css"

import HeadingTag from "../HeadingTag.jsx";

import HireBoxes from "../HireBox/HireBoxes.jsx";


const  apart = [
    {
        steps : "1",
        head : "Choose the Right Talent",
        content : 'Select from our diverse pool of skilled engineers, developers, and designers. We are problem solvers committed to upholding the highest standards of integrity.',
    },
    {
        steps : "2",
        head : "Conduct an Initial Interview",
        content: "Every member of our team at Atlantis is a domain expert. Schedule an interview today to kickstart your project and achieve exceptional results.",
    },
    {
        steps : "3",
        head : "Assemble Team in 24 Hour",
        content: "Within a day, we will match you with the perfect resource based on your project requirements, swiftly assembling your design team.",
    },
];

/*const Apartbox = ({ data }) => (

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
            </div>
        ))}
    </div> );*/


export default function HireSteps() {
    return <div>
            <HireBoxes data={apart}  />
        </div>

}
