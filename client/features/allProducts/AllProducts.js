import React, { useEffect } from "react";
import { fetchAllProducts, selectProducts } from "./allProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="productsPage">
      {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`}>
            <div className="productCard" key={product.id}>
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
          </Link>
        );
      })}
    </div>
  );
};

export default AllProducts;
