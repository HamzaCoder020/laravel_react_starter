import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dynamic from "../pages/Dynamic";
import Whatwedo from "../pages/Whatwedo";
import Ui from "../pages/ui.jsx";
import Howitworks from "../pages/Howitworks";
import HirePhpDeveloper from "../pages/hire-php-developer";
import HireGraphicDesigner from "../pages/hire-graphic-designer";
import HireNodeDeveloper from "../pages/hire-node-developer";
import HireWordpressDeveloper from "../pages/hire-wordpress-developer.jsx";
import HireReactNativeDeveloper from "../pages/hire-reactNative-developer";
import HiremobileAppDeveloper from "../pages/hire-mobileApp-developer.jsx";
import HireSocialMarketing from "../pages/hire-social-marketing";
import Careers from "../pages/testpage.jsx";
import HireSeoExpert from "../pages/hire-seo-expert.jsx";
import HirePPCExpert from "../pages/hire-ppc-expert.jsx";
import HireEmailExpert from "../pages/hire-email-marketer";
import HireCopyWriters from "../pages/hire-copy-writers.jsx";
import ContactUs from "../pages/contact-us";


const base_url = "/laravel_react_starter"

export default function Router() {
    return (
        <Routes>
            // about company
            <Route path="/laravel_react_starter" exact element={<Home />}/>
            <Route path="/laravel_react_starter/about" element={<About />} />
            <Route path="/laravel_react_starter/contact-us" element={<ContactUs />} />
            <Route path="/laravel_react_starter/Whatwedo" element={<Whatwedo />} />
            <Route path="/laravel_react_starter/careers" element={<Careers />} />
            <Route path="/laravel_react_starter/Ui" element={<Ui />} />
            <Route path="/laravel_react_starter/hire-PhP-developer" element={<HirePhpDeveloper />} />
            <Route path="/laravel_react_starter/hire-graphic-designer" element={<HireGraphicDesigner />} />
            <Route path="/laravel_react_starter/hire-nodejs-developer" element={<HireNodeDeveloper />} />
            <Route path="/laravel_react_starter/hire-wordpress-developer" element={<HireWordpressDeveloper />} />
            <Route path="/laravel_react_starter/hire-reactnative-developer" element={<HireReactNativeDeveloper />} />
            <Route path="/laravel_react_starter/hire-mobileApp-developer" element={<HiremobileAppDeveloper />} />
            <Route path="/laravel_react_starter/hire-social-marketing" element={<HireSocialMarketing />} />
            <Route path="/laravel_react_starter/hire-seo-expert" element={<HireSeoExpert />} />
            <Route path="/laravel_react_starter/hire-ppc-expert" element={<HirePPCExpert />} />
            <Route path="/laravel_react_starter/hire-email-marketer" element={<HireEmailExpert />} />
            <Route path="/laravel_react_starter/hire-copy-writers" element={<HireCopyWriters />} />
            <Route path="/laravel_react_starter/Howitworks" element={<Howitworks />} />
            <Route path="/laravel_react_starter/dynamic/:id" element={<Dynamic />} />
        </Routes>
    );
}

