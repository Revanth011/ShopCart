import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from './components/Navbar';
import SingleProduct from "./components/SingleProduct";
import ScaleLoader from "react-spinners/ScaleLoader";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const searchProduct = (prod) => {
        setFiltered(products.filter(product => {
            return product.title.toLowerCase().includes(prod);
        }))
    }

    const handleScroll = (e) => {
        e.preventDefault();
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if ((scrollTop + clientHeight) >= scrollHeight) setPage(p => p + 1);
    }

    useEffect(() => {
        setLoading(true)
        async function fetchProducts() {
            const resp = await fetch(`http://localhost:8000/products?page=${page}`);
            const data = await resp.json();
            setProducts(prev => [...prev, ...data]);
            setFiltered(prev => [...prev, ...data]);
            setLoading(false)
        }
        fetchProducts();
    }, [page])

    return (
        <div className="home" onScroll={handleScroll}>
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
            {loading ? <div className="loader"><ScaleLoader size={40} /></div> : ""}
        </div>
    )
}

export default Home;