/*import {BrowserRouter, Route, Routes} from "react-router-dom";*/
/*import Preloader from '../custom_functions/preloader.jsx';*/

import Navbar_main from "./Navbar/Navbar_main";
import Footer from "./Footer/Footer.jsx";
import Router from "../Navigation/Routes";

export default function Layout() {
    /*const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate some asynchronous task (e.g., data fetching)
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Replace this with your actual async task
    }, []);*/

    return (
        <>

                <Navbar_main/>
                    <Router />
                <Footer/>

        </>
    )
}
