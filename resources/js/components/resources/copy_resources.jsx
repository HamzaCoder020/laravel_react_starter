import "../HireBox/HireBoxes.css";
import "./resources.css";
import React, {useEffect, useState} from "react";
import HeadingTag from "../../components/HeadingTag.jsx";

const Resources = ({ data }) =>  (
    <div className="row">
        {data.map((item, index) => (
            <div className="col-md-4  mb-5" key={index}>
                <div className="hire_box">
                    <img src={"public/employee_images/" + item.image} alt="employee img"/>
                    <h5 className="my-3"> {item.full_name} </h5>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}

    </div>);


export default function Copy_resources() {
    const [resource, setResource] = useState([]);

    useEffect(() => {
        const api_url = 'http://localhost/laravel_react_starter/api/get_employee?page=ReactJS';
        fetch(api_url)
            .then(response => response.json())
            .then(data => setResource(data.employee_list));
        console.log('setResource 2 = ',resource, api_url);
    }, []);

    useEffect(() => {
        console.log('resource chage ',resource)
    }, [resource]);

    return  <div className="ui_resource_sec">
        <div className="container">
            <HeadingTag heading="Copywriters You Can Hire" tag="Boost your social media presence across Facebook, Twitter, Instagram, LinkedIn, and YouTube with our expert copywriters. Stand out from the competition and engage customers effectively. Hire our talented copywriters conveniently from home."/>
            <div className="resource_body">
                <Resources data={resource}/>
            </div>
        </div>
    </div>;
}
