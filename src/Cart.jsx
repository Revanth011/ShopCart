import "./Cart.css";
import SingleProduct from "./components/SingleProduct";
import { useContext } from "react";
import { CartContext } from "./context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
    const { state: { cart } } = useContext(CartContext);
    return (
        <div className="cartItemsMain">
            <Link to={"/"}>
                <div className="backLink">
                    <span className="material-symbols-rounded">
                        arrow_back
                    </span>
                    <span>Go back</span>
                </div>
            </Link>

            <div className="cartItems-container">
                <span className="cartItems-title">Cart Items</span>
                <div className="cartItems">
                    {
                        cart.map(product => {
                            return (
                                <SingleProduct product={product} key={product.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;