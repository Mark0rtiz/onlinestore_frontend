import "./product.css";
import { useState } from "react";
import QuantityPicker from "./quantityPicker";

const Product = () => {
  return (
    <div className="product">
      <img src="https://picsum.photos/200" alt="" />
      <h6>Here's a random product</h6>
      <QuantityPicker></QuantityPicker>
    </div>
  );
};

export default Product;
