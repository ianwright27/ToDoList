import { useState } from "react";
import "./ListGroup.css";

const ListGroup = () => {
  let newListItems = ["Take a nap", "Go for a walk", "Training", "Prep dinner"];

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
            className="me-2 borderless"
            type="search"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new item"
            aria-label="Search"
          />
          <button className="btn btn-light" type="submit">
            Add
          </button>
        </form>

        {listItems.length === 0 ? <div>No list to show</div> : null}

        <div className="list-holder">
          <ul className="list-group">
            {listItems.map((item, index) => (
              <li className="list-group-item" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label labels">{item}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGroup;
