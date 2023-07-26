import ReactDOM from 'react-dom/client';
import Layout from "./components/Layout";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/queries.css';


ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
);
