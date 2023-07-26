import HireNow from "../../components/HireNow";
import "./hero_sec.css";
import finish from "../../../images/productsLogo/finish-my-deals-logo-2-copy.png";
import rai from "../../../images/productsLogo/rai.png";
import atlantis from "../../../images/productsLogo/silhoute-v-4.png";
import secure from "../../../images/productsLogo/silhoute-v-2.png";
import pacha from "../../../images/productsLogo/parcha-logo.png";



export default function HeroSection({ children ,label, tagline }) {

    const products = [
        finish,
        rai,
        atlantis,
        secure,
        pacha,
        finish,
        rai,
        atlantis,
        secure,
        pacha
    ];

    return <div>
        <div className="hero_sec">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-8 order-1 order-md-0 align-self-center">
                        <h1 className="fw-bold mb-4">{label}</h1>
                        {tagline?<p>{tagline}</p>:null}
                        <HireNow />
                    </div>
                    <div className="col-md-4 order-0 order-md-1 align-self-end">
                        {children}
                    </div>
                </div>
            </div>
        </div>
        {/*<ProductSlide images={products} />*/}

    </div>;
};



