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


export default function Mobileapp_resources() {
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
            <HeadingTag heading="Mobile App Developers You Can Hire" tag="Introducing Atlantis Tech's team of highly skilled Mobile App Developer, ready to revolutionize your development requirements. Experience the evolution of iOS development by hiring our experts in just a matter of minutes."/>
            <div className="resource_body">
                <Resources data={resource}/>
            </div>
        </div>
    </div>;
}
