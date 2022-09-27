import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from './components/Navbar';
import SingleProduct from "./components/SingleProduct";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const searchProduct = (prod) => {
        setFiltered(products.filter(product => {
            return product.title.toLowerCase().includes(prod);
        }))
    }
    useEffect(() => {
        async function fetchProducts() {
            const resp = await fetch("http://localhost:8000/products");
            const data = await resp.json();
            setProducts(data);
            setFiltered(data);
        }
        fetchProducts();
    }, [])

    return (
        <div className="home">
            <Navbar searchProduct={searchProduct} />
            <div className="homeContainer">
                <div className="products">
                    {
                        filtered.map(product => {
                            return <SingleProduct product={product} key={product.id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;