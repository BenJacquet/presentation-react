import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
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