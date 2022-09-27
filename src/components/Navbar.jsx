import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/Context";
import { Link } from "react-router-dom";

const Navbar = ({ searchProduct }) => {

    const { state: { cart } } = useContext(CartContext);

    return (
        <div className="nav">
            <span className="site-logo">shopNow</span>
            <div className="search">
                <input type="text" id="searc" placeholder="Search Products" onChange={(e) => searchProduct(e.target.value)} />
            </div>
            <div className="cart">
                <Link to={"/cart"}>
                    <span className="material-symbols-rounded">
                        shopping_cart
                    </span>
                </Link>
                {cart.length !== 0 && cart.length}
            </div>
        </div>
    )
}

export default Navbar;