import React from "react";
import { useAlert } from "./AlertContext";

export default function Alert() {
  const { alert, toggle } = useAlert();

  if (!alert) return null;
  return (
    <div className={"alert alert-danger"} onClick={toggle}>
      Very important message
    </div>
  );
}
