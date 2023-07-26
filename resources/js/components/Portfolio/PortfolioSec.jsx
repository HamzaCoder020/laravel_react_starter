
import "../Portfolio/PortfolioSec.css";
import HeadingTag from "../../components/HeadingTag.jsx";
import Result from "./Result.jsx";


function Portfolio() {
    return <div className="container my-5">
        <HeadingTag heading="Portfolio" tag='Partner with us at Atlantis Bpo Solution for all your website
            development, app UI/UX designing and development, and digital marketing needs.
            We are committed to delivering high-quality solutions that exceed your expectations'/>
        <Result/>
    </div>;

}

export default Portfolio;
