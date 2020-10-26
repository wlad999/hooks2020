import React, { useState, useCallback } from "react";
import ItemsList from "./ItemsList";

function App() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = { color: colored ? "red" : "blue" };

  const generateItemsFromApi = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>

      <button
        className="btn btn-success"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Добавить
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Убрать
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          setColored((prev) => !prev);
        }}
      >
        Изменить
      </button>
      <ItemsList getItems={generateItemsFromApi} />
    </div>
  );
}

export default App;
