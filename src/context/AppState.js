import React from "react";
import AppContext from "./AppContext";
import AppReducer from "./app-reducer";
const AppState = (props) => {
  const initialState = {
    cartList: [],
  };
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  const addToCart = (product) => {
    dispatch({ type: "add", payload: product });
  };
  const deleteFromCart = (product) => {
    dispatch({ type: "remove", payload: product });
  };
  const editCart = (id, quantity) => {
    dispatch({ type: "edit", payload: { id, quantity } });
  };
  //console.log("Carrt", state);
  return (
    <AppContext.Provider
      value={{
        cartList: state.cartList,
        addToCart: addToCart,
        editCart: editCart,
        deleteFromCart: deleteFromCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
