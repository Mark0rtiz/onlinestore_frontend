import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    let next = quantity - 1;
    if (next >= 1) {
      setQuantity(next);
      props.onChange(next);
    }
  };
  const increase = () => {
    let next = quantity + 1;

    setQuantity(next);
    props.onChange(next);
  };

  return (
    <div className="qt-picker">
      <button type="button" className="btn btn-outline-dark" onClick={decrease}>
        -
      </button>
      <label>{quantity}</label>
      <button type="button" className="btn btn-outline-dark" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
