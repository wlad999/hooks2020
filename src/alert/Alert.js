import React from "react";
import { useAlert } from "./AlertReducer";

export default function Alert() {
  const {
    alert,
    text,
    //toggle
    hide,
  } = useAlert();
  console.log("text", text);

  if (!alert) return null;
  return (
    <div className={"alert alert-danger"} onClick={hide}>
      {text}
    </div>
  );
}
