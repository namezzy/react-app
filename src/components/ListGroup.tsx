import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
import Message from "../Message";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    return items.length === 0 ? <p>No item found.</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            onClick={handleClick}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
