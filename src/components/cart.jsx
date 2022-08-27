import "./cart.css";
import { useContext } from "react";
import StoreContext from "./../store/storeContext";

const Cart = () => {
  const cart = useContext(StoreContext).cart;
  return (
    <div className="cart">
      <h2>My Cart</h2>
      <h5>You have {cart.length} in your cart.</h5>

      <ul>
        {cart.map((prod) => (
          <li key={prod._id}>{prod.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
