import React from "react";
import Main from "./alert/Main";
import Alert from "./alert/Alert";
//import { AlertProvider } from "./alert/AlertContext";
import { AlertProvider } from "./alert/AlertReducer";

function App() {
  return (
    <AlertProvider>
      <div className={"container pt-3"}>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}

export default App;
