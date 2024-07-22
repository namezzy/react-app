import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
