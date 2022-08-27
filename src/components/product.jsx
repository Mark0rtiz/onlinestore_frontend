import "./product.css";
import { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import StoreContext from "../store/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;

  const handleAddClicked = () => {
    addToCart(props.data);
  };

  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return total.toFixed(2);
  };

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="Product" />
      <h6>{props.data.title}</h6>
      <label className="price">Price:${props.data.price.toFixed(2)}</label>
      <br></br>
      <label className="total">Total:${getTotal()}</label>

      <div className="controls">
        <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        <button onClick={handleAddClicked} className="cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
