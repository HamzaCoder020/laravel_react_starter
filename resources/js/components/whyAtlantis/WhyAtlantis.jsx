import "../whyAtlantis/WhyAtlantis.css";
import HeadingTag from "../../components/HeadingTag.jsx";
import achievements from "../../../images/home/projects_graph.png";


export default function WhyAtlantis() {
  return<div className="whyAtlantis d-none d-lg-block">
      <div className="container">
          <HeadingTag heading="Why Atlantis Tech"/>
          <div className="whyus_graph">
              <img src={achievements} alt="Atlantis Achievemts"/>
              <p className="customer_satisfaction"><span className="counts_achievements">100%</span>Customer Satisfaction</p>
              <p className="projects_completed"><span className="counts_achievements">1500+</span>Projects Completed</p>
              <p className="positive_reviews"><span className="counts_achievements">500+</span>Positive Reviews</p>
              <p className="team_members"><span className="counts_achievements">60+</span>Team Members</p>
              <p className="satisfied_clients"><span className="counts_achievements">100+</span>Satisfied Clients</p>
          </div>
      </div>
  </div>
};
