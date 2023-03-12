import "./Main.css";

import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";
import Description from "./components/description/Description";

const ProductPage = () => {
    return (
        <div>
            <NavBar />
            <Carousel />
            <Description/>
        </div>
    )
}

export default ProductPage;