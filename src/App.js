import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";
import AboutMe from "./components/aboutme";
import Product from "./components/product";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AboutMe></AboutMe>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
