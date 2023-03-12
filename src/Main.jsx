import "./Main.css";

import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";
import Description from "./components/description/Description";

const ProductPage = () => {
    return (
        <div>
            <NavBar />
            <div className="item-container">
                <Carousel />
                <Description/>
            </div>
        </div>
    )
}

export default ProductPage;