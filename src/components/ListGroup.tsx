import { Fragment } from "react/jsx-runtime";

import Message from "../Message";
import { useState } from "react";


interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {
  
  // Hook 
  const [selectedIndex, setSelectedIndex] = useState(-1); 




  const getMessage = () => {
    return items.length === 0 ? <p>No item found.</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index  ? 'list-group-item active': 'list-group-item'}
            onClick={() => {setSelectedIndex(index)}}
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
