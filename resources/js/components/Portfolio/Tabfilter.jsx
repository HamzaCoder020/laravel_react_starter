import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Tabfilter.css";
import eye from "../../../images/home/Projects/view.png";

const Project = ({ title  , projectsLogo }) => (
    <div className="col-md-4">
        <Link to={'/laravel_react_starter/project/6'}>
            <div className="project_box d-flex justify-content-center">
                <img src={projectsLogo} className="align-self-center" alt="Project Logo"/>
                <div className="eye_overlay d-flex justify-content-center align-items-center flex-column">
                    <img src={eye} className='my-2' alt="View Image"/>
                    <h4>{title}</h4>
                </div>
            </div>
        </Link>
    </div>);



const TabFilter = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tabCategory) => {
        setActiveTab(tabCategory);
    };


    const uniqueCategories = ['all', ...new Set(tabs.map((tab) => tab.category))];

    const filteredTabs = activeTab === 'all' ? tabs : tabs.filter((tab) => tab.category === activeTab);

    return (
        <div>
            <div className="tab-buttons porfolio_tabs">
                {uniqueCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleTabClick(category)}
                        className={activeTab === category ? 'active' : ''}
                    >
                        {category === 'all' ? 'All' : category}
                    </button>
                ))}
            </div>

            <div className="tab-content projects_list">
                <div className="row">
                    {filteredTabs.map((tab) => (

                       <Project key={tab.id} title={tab.title} projectsLogo={tab.content}  />

                    ))}
                </div>
            </div>

        </div>
    );
};

export default TabFilter;



