import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

export default function HireNow() {
    return <>
        <Link to={"/laravel_react_starter/contact-us"}>
            <Button className="btn_hirenow">Hire Now</Button>
        </Link>
    </>;
}
