import "./product.css";
import { useState } from "react";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
  const add2cart = () => {};
  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return total.toFixed(2);
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="Product" />
      <h6>{props.data.title}</h6>
      <label className="price">Price:${props.data.price.toFixed(2)}</label>
      <br></br>
      <label className="total">Total:${getTotal()}</label>

      <div className="controls">
        <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        <button onClick={add2cart} className="cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
