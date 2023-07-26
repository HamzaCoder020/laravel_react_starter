import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from "../../../../public/images/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HireNow from "../../components/HireNow";
import "./navbar_style.css";


export default function Navbar_main() {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = (nextShowState, event, metadata) => {
        setShowDropdown(nextShowState);
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Link to="/laravel_react_starter" className="navbar-brand"><img src={logo} alt="logo" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="menu_toggle_id" className=""/>
                <Navbar.Collapse className="justify-content-end"  id="basic-navbar-nav">
                    <Nav className="">
                        <NavDropdown show={showDropdown}
                                     onClick={() => setShowDropdown(!showDropdown)} title="Hire The Best" id="basic-nav-dropdown"
                                   className="mx-3 drop_down_hire" onToggle={handleDropdownToggle}>
                            <div className="creative">
                                <h5>Web Development</h5>
                                <Link to="/laravel_react_starter/hire-reactNative-developer">React.js</Link>
                                <Link to="/laravel_react_starter/hire-nodejs-developer">Node.js</Link>
                                <Link to="/laravel_react_starter/hire-wordpress-developer">Wordpress</Link>
                                <Link to="/laravel_react_starter/hire-php-developer" >PHP Development</Link>
                            </div>
                            <div className="creative">
                                <h5>Mobile App</h5>
                                <Link to="/laravel_react_starter/hire-mobileApp-developer">Hybrid App</Link>
                                <Link to="/laravel_react_starter/hire-reactnative-developer">React Native</Link>
                            </div>
                            <div className="creative">
                                <h5>Marketing</h5>
                                <Link to="/laravel_react_starter/hire-social-marketing">Social Media Marketing</Link>
                                <Link to="/laravel_react_starter/hire-seo-expert">SEO Expert</Link>
                                <Link to="/laravel_react_starter/hire-ppc-expert">PPC Expert</Link>
                                <Link to="/laravel_react_starter/hire-email-marketer">Email Marketing</Link>
                                <Link to="/laravel_react_starter/hire-copy-writers">Copy Writers</Link>
                            </div>
                            <div className="creative">
                                <h5>Graphic Designing</h5>
                                <Link to="/laravel_react_starter/Ui">Ui/Ux</Link>
                                <Link to="/laravel_react_starter/hire-graphic-designer">Graphic Designer</Link>
                            </div>
                        </NavDropdown>
                        <Nav.Item href="/laravel_react_starter/whatwedo"><Link to="/laravel_react_starter/whatwedo" className="nav-link">What we do</Link></Nav.Item>
                        <Nav.Item href="/laravel_react_starter/careers"><Link to="/laravel_react_starter/careers" className="nav-link">Careers</Link></Nav.Item>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="d-lg-none">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <HireNow/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
};
