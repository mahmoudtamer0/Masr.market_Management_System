import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
// import Swal from "sweetalert2";


function Products() {
    let [products, setProducts] = useState();
    useEffect(() => {
        getproducts()
    }, [])

    const getproducts = () => {
        fetch('https://btngan-data.onrender.com/products').then(res => res.json())
            .then(data => setProducts(data))
    }

    const deletproduct = (id) => {
        axios(`https://btngan-data.onrender.com/products/${id}`, {
            method: 'DELETE'
        }).then(data => {
            getproducts()
        })
    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        <div className="container">
            <h2 className="all-title">All Products</h2>
            <Link to='/add_product' className="btn btn-success btn-lg cat-btn">Add Product</Link>
            {products ? <table className="table table-striped">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>category</th>
                        <th>operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description?.slice(0, 50)} ...</td>
                                <td>{product.price} $</td>
                                <td>{product.category}</td>
                                <td>
                                    <Link className="btn btn-info btn-sm" to={`/${product.id}`}>view</Link>
                                    <Link className="btn btn-warning btn-sm" to={`/edit/${product.id}`}>edit</Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => deletproduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <div className='prodpre text-center'><ClipLoader
                color='#ed8a8a'
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            /></div>}
        </div>
    )
}

export default Products;