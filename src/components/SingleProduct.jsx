import "./SingleProduct.css";
import { useContext } from "react";
import { CartContext } from "../context/Context";

const SingleProduct = ({ product }) => {

    const { state: { cart }, dispatch } = useContext(CartContext);

    return (
        <div className="product">
            <div className="productContainer">
                <span className="product-categ">{product.category}</span>
                <img src={product.image} alt="" />
                <div className="product-details">
                    <div className="product-title">
                        {
                            product.title
                                .split(" ")
                                .splice(0, 6)
                                .join(" ")
                        }
                    </div>
                    <div className="product-price">${product.price}</div>
                </div>
                <div className="product-buy">
                    <span className="product-rate">{product.rating.rate}/5 ({product.rating.count} Reviews)</span>
                    {
                        cart.some(p => p.id === product.id) ?
                            <span className="material-symbols-rounded" onClick={() => {
                                dispatch({ type: "REMOVE_FROM_CART", payload: product })
                            }}>
                                cancel_presentation
                            </span>
                            :
                            <span className="material-symbols-rounded" onClick={() => {
                                dispatch({ type: "ADD_TO_CART", payload: product })
                            }}>
                                add_shopping_cart
                            </span>
                    }
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;