import React, { useState, useEffect } from 'react';
import career from "../../images/bibi.png";
import JobPositions from "../components/jobPositions/JobPositions.jsx";



const job_positions = [
    {post : "frontend developer", location: "Islamabad, Pakistan"}, {post : "senior java developer", location: "Islamabad, Pakistan"}
    ]

export default function Careers() {
    return <div className="">
        <div className="hero_careers">
            <div className="container">
                <div className="img_box_career">
                    <img src={career} alt="Human Resource"/>
                </div>
            </div>
        </div>

        <div className="job_positions_sec">
            <div className="container">
                <div className="head_box_jobs">
                    <div className="row">
                        <div className="col-md-5"><h2>Job Title</h2></div>
                        <div className="col-md-3"><h2>Location</h2></div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
                <div className="jobs_body_box py-5 px-3">
                    <JobPositions data={job_positions}/>
                </div>
            </div>
        </div>

    </div>;
}
