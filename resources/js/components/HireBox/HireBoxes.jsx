import "../HireBox/HireBoxes.css";

const HireBoxes = ({ data }) => (
    <div className="row">
        {data.map((item, index) => (
            <div className="col-md-4  mb-5" key={index}>
                <div className="hire_box">
                    { item.steps ? (
                        <div className="steps_hire_circle">{item.steps}</div>
                    ) : item.img ? (
                        <img src={item.img} alt=""/>
                    ) : null
                    }
                    <h5 className="my-3"> {item.head} </h5>
                    <p>{item.content}</p>
                    {/*<img src={"public/employee_images/"+item.image} alt="employee img"/>
                    <h5 className="my-3"> {item.full_name} </h5>
                    <p>{item.description}</p>*/}
                </div>
            </div>
        ))}

    </div>)


export default HireBoxes;
