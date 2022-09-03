import axios from "axios";

const catalog = [
  {
    _id: "1",
    title: "Sony a6600",
    price: 1399.0,
    category: "photo & video",
    image: "a6600.jpeg",
  },
  {
    _id: "2",
    title: "Panasonic Lumix G100",
    price: 799.99,
    category: "photo & video",
    image: "Lumixg100.jpeg",
  },
  {
    _id: "3",
    title: "Canon EOS RP",
    price: 1299.99,
    category: "photo & video",
    image: "EOSRP.jpeg",
  },
  {
    _id: "4",
    title: "Xbox Series X",
    price: 499.99,
    category: "video games",
    image: "Xbox.jpeg",
  },
  {
    _id: "5",
    title: "PlayStation 5",
    price: 499.99,
    category: "video games",
    image: "PS5.jpeg",
  },
  {
    _id: "6",
    title: "Nintendo Switch OLED",
    price: 349.99,
    category: "video games",
    image: "Switch.jpeg",
  },
  {
    _id: "7",
    title: "",
    price: 49.99,
    category: "computer",
    image: "",
  },
  {
    _id: "8",
    title: "",
    price: 49.99,
    category: "computer",
    image: "",
  },
  {
    _id: "9",
    title: "",
    price: 49.99,
    category: "computer",
    image: "",
  },
  {
    _id: "10",
    title: "",
    price: 49.99,
    category: "computer",
    image: "",
  },
];

class DataService {
  serverURL = "http://127.0.0.1:5000";

  async getCatalog() {
    let res = await axios.get(this.serverURL + "/api/catalog");
    return res.data;
    //return catalog;
  }

  async saveProduct(prod) {
    let res = await axios.post(this.serverURL + "/api/catalog", prod);
    return res.data;
  }

  async getCoupons(prod) {
    let res = await axios.get(this.serverURL + "/api/coupons");
    return res.data;
  }

  async saveCoupon(coupon) {
    let res = await axios.post(this.serverURL + "/api/coupons", coupon);
    return res.data;
  }
}

export default DataService;
