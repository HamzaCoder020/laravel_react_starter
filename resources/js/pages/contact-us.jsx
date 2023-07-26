import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import "../../css/app.css";
import img1 from '../../images/home/developer3.png';
import HeadingTag from "../components/HeadingTag.jsx";
import CTA from "../components/CTA/CTA.jsx";
import call from '../../images/contact/call.png';
import address from '../../images/contact/address.png';
import email from '../../images/contact/email (1).png';




const images = [
    img1
]

export default function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return <div className="">
        <section className="header_contact">
            <div className="content_head">
                <HeadingTag heading={"Hire The Top talent!"} tag={"We are always happy to hear from you and hear any questions you may have. Whether you want to hire an expert, request a qoute, give feedback, or just say hello, feel free to contact us using any of the methods below: "}/>
            </div>
        </section>
        <section className="contact_form_sec my-4">
            <div className="container">
                <div className="contact_box my-4 p-3 p-lg-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="mb-4">Contact Us!</h3>
                            <div className="contact_list d-flex my-4 align-items-start">
                                <img src={email} alt="" className="icon_contact"/>
                                <h6 className="mx-2">info@atlantisbpo.com</h6>
                            </div>
                            <div className="contact_list d-flex my-4 align-items-start">
                                <img src={call} alt="" className="icon_contact"/>
                                <h6 className="mx-2">+1 866 965 4860</h6>
                            </div>
                            <div className="contact_list d-flex my-2 align-items-start">
                                <img src={address} alt="" className="icon_contact"/>
                                <h6 className="mx-2">1309 Coffeen Avenue STE 1200 ,
                                    Sheridan, WY 82801.</h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>You can also fill out the form below and we will get back
                                to you as soon as possible. Thank you for choosing Atlantis Tech!</p>
                            <form action="">
                                <input type="text" className="w-100 my-2 px-3" placeholder="Name"/>
                                <input type="text" className="w-100 my-2 px-3" placeholder="Company"/>
                                <textarea name="" id=""  className="w-100 my-2 px-3" rows="6" placeholder="Please tell us how can we help you?"/>
                                <button type="submit" className="w-100 submit_form_btn p-2">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <CTA head={"Supercharge Your Business Today!"} tag={"Let's discuss your business plans and find the perfect match for success. Schedule your introductory call today!"}/>
    </div>;
}
