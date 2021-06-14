const AppReducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (!state.cartList.includes(action.payload))
        return {
          ...state,
          cartList: [...state.cartList, { ...action.payload, quantity: 1 }],
        };
      else {
        return {
          ...state,
        };
      }
    case "edit":
      return {
        ...state,
        cartList: state.cartList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        }),
      };
    case "remove":
      return {
        ...state,
        cartList: state.cartList.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
export default AppReducer;
