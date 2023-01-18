import React, { useEffect } from "react";
import { fetchAllProducts, selectProducts, deleteProductAsync } from "./allProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddProduct from "../addProduct/AddProduct";

const AllProducts = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProductAsync(e.target.value));
  };

  return (
    <div className="productsPage">
      {isAdmin && isLoggedIn ? <AddProduct /> : null}{" "}
      {/** only shows add product form if user is logged in and is an admin */}
      {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="productCard">
              <div className="productCardInner">
                <div className="cardImage">
                  <img src={`/${product.imageUrl}`} />
                </div>
                <div className="productCardBottom">
                  <h2 className="cardName">{product.name}</h2>
                  <p className="cardPrice"> $ {product.price}</p>
                </div>
              </div>
            </div>
            {isAdmin && isLoggedIn ? (
              <button
                className="deleteButton"
                value={product.id}
                onClick={handleDelete}
              >
                Delete
              </button>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};

export default AllProducts;
