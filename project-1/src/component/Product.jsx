import { useState } from "react";
import "./Product.css";
import Swal from 'sweetalert2';

function Product() {
    const [state, setState] = useState("product-page1");
    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [arr, setArr] = useState([]);

    const handleAddProduct = (e) => {
        e.preventDefault();
        let obj = {
            img: img,
            name: name,
            category: category,
            description: description,
            quantity: quantity,
            price: price,
        };

        if (img && name && category && description && quantity && price) {
            Swal.fire("Add To Product", "You clicked the button!", "success");
            setArr([...arr, obj]);
            setImg("");
            setName("");
            setCategory("");
            setDescription("");
            setQuantity("");
            setPrice("");
        } else {
            Swal.fire("Error", "Please fill out all fields.", "error");
        }
    };

    return (
        <div>
            {state === "product-page1" ? (
                <div className="product1">
                    <div className="form-container">
                        <form onSubmit={handleAddProduct}>
                            <h2>Add Product</h2>
                            <div className="form-group">
                                <input type="url" id="image" placeholder="Enter Product Image" accept="image/*" value={img} onChange={(e) => setImg(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="productName" placeholder="Enter Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="category" placeholder="Enter Product Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <textarea id="description" rows="4" placeholder="Enter Product Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            </div>
                            <div className="form-group">
                                <input type="number" id="quantity" placeholder="Enter Product Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <input type="number" id="price" placeholder="Enter Product Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                            </div>
                            <button type="submit" className="add-product-btn">Add Product</button>
                        </form>
                    </div>
                    <div className="pr1">
                        <button onClick={() => setState("product-page")}>View Details</button>
                    </div>
                </div>
            ) : (
                <div className="p1">
                    <div className="h1">
                        <h1>Product Details</h1>
                    </div>
                    <div className="p3">
                        <table width="90%" height="150px">
                            <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Category</th>
                                    <th>Product Description</th>
                                    <th>Product Quantity</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((el, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={el.img} alt={el.name} style={{ width: "70px", height: "70px" }} />
                                        </td>
                                        <td>{el.name}</td>
                                        <td>{el.category}</td>
                                        <td>{el.description}</td>
                                        <td>{el.quantity}</td>
                                        <td>{el.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p2">
                        <button onClick={() => setState("product-page1")}>Add Product</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
