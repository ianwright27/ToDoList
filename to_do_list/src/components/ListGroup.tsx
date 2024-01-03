import { useState } from "react";
import "./ListGroup.css";

const ListGroup = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setListItems([...listItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="container-md">
        <h3 className="p-4">To Do List</h3>

        <form onSubmit={handleSubmit} className="d-flex mb-3" role="search">
          <input
            className="form-control me-2 borderless"
            type="search"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new item"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>

        <ul className="list-group">
          {listItems.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          ))}
          {/* <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
      </div>
    </div>
  );
};

export default ListGroup;
