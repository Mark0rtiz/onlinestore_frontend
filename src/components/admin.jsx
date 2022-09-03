import "./admin.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [showProdSuccess, setShowProdSuccess] = useState(false);

  const saveProduct = async () => {
    console.log("saving product...");
    console.log(product);

    //use the service to send it to the server

    let fixProd = { ...product };
    fixProd.price = parseFloat(fixProd.price);

    let service = new DataService();
    let savedProd = await service.saveProduct(product);

    if (savedProd && savedProd._id) {
      setShowProdSuccess(true);

      setTimeout(() => {
        setShowProdSuccess(false);
      }, 2000);
    }
    console.log(saveProduct);
  };

  const textChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const saveCoupon = () => {
    let copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);

    let service = new DataService();
    service.saveCoupon(copy);
  };

  const couponChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  const loadCoupons = async () => {
    let service = new DataService();
    let allCoupons = await service.getCoupons();
    console.log(allCoupons);
  };

  useEffect(() => {
    loadCoupons();
  }, []);

  return (
    <div className="admin">
      <h1>Admin</h1>

      {showProdSuccess ? (
        <div className="alert alert-success">Product Saved</div>
      ) : null}

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
            <input name="discount" onChange={couponChange} type="number" />
          </div>

          <div className="my-form">
            <label>Code</label>
            <input name="code" onChange={couponChange} type="text" />
          </div>

          <div className="my-form">
            <button onClick={saveCoupon} className="btn btn-sm btn-primary">
              Save Coupon
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
