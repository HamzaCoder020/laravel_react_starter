import "../../css/app.css";
export default function HeadingTag({ heading, tag }) {
    return <div className="text-center global_heading my-3">
        <h2> {heading} </h2>
        <p>{tag}</p>
    </div>;
}
