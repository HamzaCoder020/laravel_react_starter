import {Link} from "react-router-dom";
import "./Footer.css";
import logo from "../../../../public/images/logo.png";
import social from "../../../images/social-icon.png"


export default function Footer() {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row" id="">
                    <div className="col-md-12 col-lg-3">
                        <Link to="/laravel_react_starter" className="navbar-brand"><img src={logo} alt="Logo"/></Link>
                        <p className="pe-5 pt-3">Atlantis is a technology consulting firm with
                            an in-house team of over 1300 developers.
                            We specialize in building, designing, and
                            delivering top-tier services to enterprises.</p>
                        <h4>Follow us on</h4>
                        <img src={social} width="145px" alt="ocial Media Icons"/>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Hire Top Talent</h3>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to="/laravel_react_starter" className="nav-link">Home</Link>
                                        <Link to="/laravel_react_starter/about" className="nav-link">About</Link>
                                        <Link to="/laravel_react_starter/Howitworks" className="nav-link">How it works</Link>
                                        <Link to="/laravel_react_starter/hire-PhP-developer" className="nav-link">Hire PHP Developer</Link>
                                        <Link to="/laravel_react_starter/dynamic/2/ye wala page" className="nav-link">dynamic multi params</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3>About Company</h3>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to="/laravel_react_starter" className="nav-link">Home</Link>
                                        <Link to="/laravel_react_starter/about" className="nav-link">About</Link>
                                        <Link to="/laravel_react_starter/dynamic/1" className="nav-link">dynamic 1</Link>
                                        <Link to="/laravel_react_starter/dynamic/2" className="nav-link">dynamic 2</Link>
                                        <Link to="/laravel_react_starter/dynamic/2/ye wala page" className="nav-link">dynamic multi params</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3>Services</h3>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to="/laravel_react_starter" className="nav-link">Home</Link>
                                        <Link to="/laravel_react_starter/about" className="nav-link">About</Link>
                                        <Link to="/laravel_react_starter/dynamic/1" className="nav-link">dynamic 1</Link>
                                        <Link to="/laravel_react_starter/dynamic/2" className="nav-link">dynamic 2</Link>
                                        <Link to="/laravel_react_starter/dynamic/2/ye wala page" className="nav-link">dynamic multi params</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="location_footer mt-4 d-flex justify-content-between">
                                <div className="pak_loc">
                                    Islamabad
                                    <p>K&S IT park, Ground Floor, Atlantis Tech</p>
                                </div>
                                <div className="pak_loc text-end">
                                    Wyoming
                                    <p>1309 Coffeen Avenue STE 1200 , Sheridan, WY 82801.</p>
                                </div>
                            </div>

                    </div>

                </div>
            </div>
            </div>
        </footer>
    );
};
