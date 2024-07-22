import { Fragment } from "react/jsx-runtime";
import Message from "../Message";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

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
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
