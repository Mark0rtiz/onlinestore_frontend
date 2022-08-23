import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Mark's Electronics</h1>
      <h3>Top Tier electronics at the best prices</h3>

      <Link className="btn btn-lg btn-dark" to="/catalog"></Link>
    </div>
  );
};

export default Home;
