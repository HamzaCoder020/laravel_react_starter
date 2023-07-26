import "./JobPositions.css";

const JobPositions = ({ data }) => (
    <div className="row">
        {data.map((item, index) => (
            <div className="col-12  mb-5">
                <div className="job_box" key={index}>
                    <h5>{item.post}</h5>
                    <h5>{item.location}</h5>
                    <button>Apply Now</button>
                </div>
            </div>
        ))}

    </div>)


export default JobPositions;
