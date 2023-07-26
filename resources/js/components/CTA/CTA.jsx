import "./CTA.css"
import HireNow from "../../components/HireNow.jsx";

export default function CTA({head, tag}) {
    return (<div className="container">
            <div className="cta_box">
                <div className="row">
                    <div className="col-md-8">
                        <h2>{head}</h2>
                        <p>{tag}</p>
                    </div>
                    <div className="align-self-center col-md-4 d-flex h-100 justify-content-center">
                        <HireNow/>
                    </div>
                </div>
            </div>
        </div>
    );
};
