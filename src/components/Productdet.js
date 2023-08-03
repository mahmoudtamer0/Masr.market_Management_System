import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import './productdet.css'
function Productdet() {

    const { productId } = useParams();
    let [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://btngan-data.onrender.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="container proddett">
            <h5>{product.title}</h5>
            <div className="imag-div">
                <img src={product.image} />
            </div>
            <p> {product.description}</p>
        </div>
    )
}

export default Productdet;