import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

function Editprod() {
    let { producteditId } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch(`https://btngan-data.onrender.com/products/${producteditId}`)
            .then(res => res.json())
            .then(data => setMain(data))
    }, [])

    const [main, setMain] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')

    const onedit = (e) => {
        e.preventDefault();
        if (title != '' && price != "" && description != "" && image != "" && category != "") {
            axios.put(`https://btngan-data.onrender.com/products/${producteditId}`, {
                title,
                description,
                price,
                image,
                category
            }).then(data => {
                navigate('/')
            })
        } else {
            Swal.fire({
                title: 'Sorry, but you must to fill all of this inputs to edit this product',
            })
        }
    }

    return (
        <div className="container addd proddett">

            <div>
                <h5>{main.title}</h5>
                <div className="imag-div">
                    <img src={main.image} />
                </div>
                <p> {main.description}</p>
                <p> price: {main.price}</p>
            </div>
            <h2 className="all-title">Edit Product</h2>
            <form onSubmit={onedit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                            id="inputEmail3"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">description</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                            id="inputPassword3"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">price</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control"
                            id="inputPassword3"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword5" className="col-sm-2 col-form-label">category</label>
                    <div className="col-sm-10">

                        <div class="form-floating">
                            <select class="form-select"

                                id="floatingSelect"
                                aria-label="Floating label select example"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="select" selected>select a category</option>
                                <option value="jewelery" >jewelery</option>
                                <option value="women's_clothing">women's_clothing</option>
                                <option value="men's_clothing">men's_clothing</option>
                                <option value="electronics">electronics</option>
                            </select>
                            <label for="floatingSelect">Works with selects</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword5" className="col-sm-2 col-form-label">Image_url</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                            id="inputPassword3"
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="add-div">
                    <button type="submit" className="btn btn-primary add">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default Editprod;