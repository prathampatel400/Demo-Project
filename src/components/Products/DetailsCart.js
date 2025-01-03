import React from "react";
import "./DetailsCart.scss";
import StarRating from "./StarRating";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemsInCart } from "../../Slices/ApiSlice";
import { useParams } from "react-router-dom";

const DetailsCart = () => {
  const [productDetail, setProductDetail] = useState("");
  const params = useParams();
  const { id } = params;

  const getProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductDetail(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <>
      <h2 className="heading">Product Details :</h2>
      <div className="MyCart1">
        <img src={productDetail.image} alt={productDetail.title} />
        {productDetail && (
          <div className="itemDetails">
            <h2>{productDetail.title}</h2>
            <h4>{productDetail.category}</h4>
            <p>{productDetail.description}</p>
            <h3>Price:${productDetail.price}</h3>
            {/* <StarRating productDetail={productDetail}/> */}
          </div>
        )}
      </div>
    </>
  );
};
export default DetailsCart;
