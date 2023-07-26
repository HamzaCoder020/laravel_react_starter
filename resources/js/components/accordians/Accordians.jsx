import Accordion from 'react-bootstrap/Accordion';
import HeadingTag from "../../components/HeadingTag.jsx";
import "../../components/accordians/Accordians.css";




function Accordian( {heading, tag, data }) {

    return (<div className="accordion_sec my-5">
           <div className="container">
                <HeadingTag heading={heading} tag={tag}/>
               <Accordion defaultActiveKey="null" className="mt-5">
                   {data.map((item, index) => (
                       <Accordion.Item eventKey={`${index}`} key={index}>
                           <Accordion.Header>{item.header}</Accordion.Header>
                           <Accordion.Body><p>{item.body}</p></Accordion.Body>
                       </Accordion.Item>
                   ))}
               </Accordion>

                </div>
        </div>
    );
}

export default Accordian;
