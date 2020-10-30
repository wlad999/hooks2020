import React, { useReducer, useContext } from "react";

export const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: true, text: action.text };
    case HIDE_ALERT:
      return { ...state, alert: false };
    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    alert: false,
    text: "",
  });

  const show = (text) => dispatch({ type: SHOW_ALERT, text });
  const hide = () => {
    console.log("hide");
    dispatch({ type: HIDE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{ alert: state.alert, show, hide, text: state.text }}
    >
      {children}
    </AlertContext.Provider>
  );
};
