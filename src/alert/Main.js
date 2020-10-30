import React from "react";
import { useAlert } from "./AlertReducer";

export default function Main() {
  const {
    //toggle
    show,
  } = useAlert();

  return (
    <>
      <h1>Context</h1>
      <button
        onClick={() => show("this is text feom Main.js")}
        className="btn btn-success"
      >
        Show alert
      </button>
    </>
  );
}
