import './Main.css';

import NavBar from "./components/NavBar";
import Avatar from "../images/Avatar.png";
import Description from "./components/Description";

const ProductPage = () => {
    return (
        <div>
            <NavBar />
            <img src={Avatar} alt="hello" />
            <Description/>
        </div>
    )
}

export default ProductPage;