import "./productInCart.css";

const ProductInCart = (props) => {
  return (
    <div className="prod-cart">
      <img src={"/images/" + props.data.image} alt="Product" />
      <h6>{props.data.title}</h6>

      <label>{props.data.quantity}</label>
      <label>{props.data.price}</label>
      <label>{props.data.price * props.data.quantity}</label>

      <button className="btn btn-sm btn-danger">Remove</button>
    </div>
  );
};

export default ProductInCart;
