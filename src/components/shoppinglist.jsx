import "./shoppinglist.css";
import { useState } from "react";

const ShoppingList = () => {
  const [text, setText] = useState("");

  const [items, setItems] = useState([]);

  const save = () => {
    console.log(text);

    let listCopy = [...items];
    listCopy.push(text);
    setItems(listCopy);
  };

  const textChange = (e) => {
    let value = e.target.value;
    setText(value);
  };
  return (
    <div className="shop-list">
      <h4>Your List</h4>

      <label>Add to list</label>
      <input onChange={textChange} type="text" />
      <button onClick={save} className="list-btn">
        Add
      </button>

      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
