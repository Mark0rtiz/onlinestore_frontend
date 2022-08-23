import "./admin.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});

  const saveProduct = () => {
    console.log("saving product...");
    console.log(product);
  };

  const textChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const couponCode = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  const discountProduct = (e) => {
    console.log(coupon);
  };

  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="parent">
        <section className="products">
          <h3>Register Products</h3>

          <div className="my-form">
            <label>Title:</label>
            <input name="title" onChange={textChange} type="text" />
          </div>

          <div className="my-form">
            <label>Price:</label>
            <input name="price" type="number" />
          </div>

          <div className="my-form">
            <label>Image</label>
            <input name="image" type="text" />
          </div>

          <div className="my-form">
            <label>Category</label>
            <input name="category" type="text" />
          </div>

          <div className="my-form">
            <button onClick={saveProduct} className="btn btn-sm btn-primary">
              Save Product
            </button>
          </div>
        </section>

        <section className="list">
          <h3>Discount Codes</h3>

          <div className="my-form">
            <label>Discount</label>
            <input name="discount" onChange={couponCode} type="number" />
          </div>

          <div className="my-form">
            <label>Code</label>
            <input name="code" onChange={couponCode} type="text" />
          </div>

          <div className="my-form">
            <button
              onClick={discountProduct}
              className="btn btn-sm btn-primary"
            >
              Save Coupon
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
