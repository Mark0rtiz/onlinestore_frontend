import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    let next = quantity - 1;
    if (next >= 1) {
      setQuantity(next);
    }
  };
  const increase = () => {
    let next = quantity + 1;

    setQuantity(next);
  };

  return (
    <div className="qt-picker">
      <button onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default QuantityPicker;
