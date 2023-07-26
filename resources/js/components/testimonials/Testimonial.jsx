import Carousel from 'react-bootstrap/Carousel';
import '../../components/testimonials/Testimonial.css';
import HeadingTag from "../../components/HeadingTag.jsx";
import test_bg from "../../../images/home/testimonial_bg.png";
import client1 from "../../../images/home/client_1.png";
import client2 from "../../../images/home/client_2.png";

function IndividualIntervalsExample() {
    return (<div className="testimonial_sec">

        <div className="container">
            <HeadingTag heading="Testimonials from Our Valued Clients"/>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100 h-100"
                        src={test_bg}
                        alt="First slide"
                    />
                    <div className="testimnial_content">
                        <div className="row">
                            <div className="col-8">
                                <p>Hiring an app developer through Atlantis Tech  was the best decision I made for my business.</p>
                            </div>
                            <div className="col-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={client1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                        className="d-block w-100 h-100"
                        src={test_bg}
                        alt="First slide"
                    />
                    <div className="testimnial_content">
                        <div className="row">
                            <div className="col-8">
                                <p>Their UI/UX designers created a stunning website that exceeded my expectations.</p>
                            </div>
                            <div className="col-4">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={client2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>

        </div>
    );
}

export default IndividualIntervalsExample;
