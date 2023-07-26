import React from 'react';
import TabFilter from './Tabfilter.jsx';
import ciusa from "../../../images/home/Projects/c-bi-usa-logo.png";
import finish from "../../../images/home/Projects/finish-my-deals-logo-2.png";
import marcha from "../../../images/home/Projects/marcha-mockup.png";
import pacha from "../../../images/home/Projects/parcha-logo (1).png";
import secure from "../../../images/home/Projects/secure.png";
import revive from  "../../../images/home/Projects/revivee_logo.png";



const Result = () => {
    // Dummy data for tabs
    const tabs = [
        { id: 1, title: 'Secure Homes', content: secure, category: 'Web Development' },
        { id: 2, title: 'Cable Internet USA', content: ciusa, category: 'Web Development' },
        { id: 3, title: 'Finish my deals', content: finish, category: 'Web Development' },
        { id: 4, title: 'Marcha Marlo', content: marcha, category: 'React Native' },
        { id: 5, title: 'Pacha', content: pacha, category: 'React Native' },
        { id: 6, title: 'Revivee', content: revive, category: 'Flutter' },
    ];




    return (
        <div>
            <TabFilter tabs={tabs} />
        </div>
    );
};

export default Result;
