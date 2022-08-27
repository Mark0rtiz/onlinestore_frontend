import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  const addToCart = (prod) => {
    console.log("adding to cart..");

    let copy = [...cart];
    copy.push(prod);
    setCart(copy);
  };

  const removeFromCart = () => {};
  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalState;
