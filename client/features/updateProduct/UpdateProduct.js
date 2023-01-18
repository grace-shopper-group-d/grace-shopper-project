import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, singleProduct, updateProductAsync } from "../singleproduct/singleProductSlice";

const UpdateProduct = (props) => {
    const { id } = props
    const dispatch = useDispatch();
    const product = useSelector(singleProduct);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [quantity, setQuantity] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setImageUrl(product.imageUrl);
        setQuantity(product.quantity);
    }, [product]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
        id: id,
        name: name,
        description: description,
        price: price,
        imageUrl: imageUrl,
        quantity: quantity,
        };
        dispatch(updateProductAsync(updatedProduct));
    };
    
    return (
        <div className="updateProduct">
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="price">Price</label>
            <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="quantity">Quantity</label>
            <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            </div>
            <button type="submit">Update Product</button>
        </form>
        {errors.length > 0 ? (
            <div className="errors">
            {errors.map((error) => (
                <div key={error}>{error}</div>
            ))}
            </div>
        ) : null}
        </div>
    );
};

export default UpdateProduct;