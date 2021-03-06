export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_ITEM":
      // console.log("state-cart", state.cart);
      let index = state.cart.findIndex((item) => item.id === action.id);
      // console.log("typeof", typeof index);
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
        // console.log("newCart", newCart);
      } else {
        console.log("no item");
      }
      return {
        ...state,
        cart: newCart,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SHOW_MODAL":
      return {
        ...state,
        modal: action.modal,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: action.modal,
      };
    case "ADD_CC":
      return {
        ...state,
        card: action.card,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "ADD_CURRENT_LOCATION":
      return {
        ...state,
        address: action.address,
        lng: action.lng,
        lat: action.lat,
      };
    case "ADD_TODAYS_ITEM":
      return {
        ...state,
        todaysItem: action.todaysItem,
      };
    default:
      return state;
  }
};

export default reducer;
