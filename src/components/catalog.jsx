import "./catalog.css";
import Product from "./product";

const Catalog = () => {
  return (
    <div className="catalog">
      <h3>Check out our inventory!!</h3>
      <div className="product-list">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};

export default Catalog;
