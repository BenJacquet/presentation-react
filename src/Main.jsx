import "./Main.css";

import { useState } from "react";
import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";
import Description from "./components/description/Description";
import ItemIMG from "../images/image-product-1-thumbnail.jpg"


const ProductPage = () => {
    const [shoppingCart, setShoppingCart] = useState([{
        itemId : 1,
        image : ItemIMG,
        name : 'Fall Limited Edition Sneakers',
        price : 125,
        number : 1,
    }])

    return (
        <div>
            <NavBar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
            <div className="item-container">
                <Carousel />
                <Description shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
            </div>
        </div>
    )
}

export default ProductPage;