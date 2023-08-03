import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Addproduct() {

    const [title, setTile] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    let navigate = useNavigate();

    const getvaluesubmite = (e) => {
        e.preventDefault()
        if (category !== '' && title !== '' && price !== "") {
            axios.post('https://btngan-data.onrender.com/products', {
                title,
                description,
                price,
                category,
                image
            }).then(data => {
                navigate('/')
            })
            axios.post(`https://btngan-data.onrender.com/${category}`, {
                title,
                description,
                price,
                category,
                image
            }).then(data => {
                navigate('/products')
            })
        } else {
            Swal.fire({
                title: 'please fill the inputs',
            })
        }

    }

    return (
        <div className="container addd proddett">
            <h2 className="all-title">Add Product</h2>

            <form onSubmit={getvaluesubmite}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                            id="inputEmail3"
                            onChange={(e) => setTile(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">description</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control"
                            id="inputPassword3"
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">price</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control"
                            id="inputPassword3"
                            onChange={(e) => setPrice(e.target.value)} />
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
                            onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div className="add-div">
                    <button type="submit" className="btn btn-primary add">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Addproduct;