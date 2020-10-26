import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
    console.log("useEffect");
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
