import React from "react";
import { useAlert } from "./AlertContext";

export default function Main() {
  const { toggle } = useAlert();

  return (
    <>
      <h1>Context</h1>
      <button onClick={toggle} className="btn btn-success">
        Show alert
      </button>
    </>
  );
}
