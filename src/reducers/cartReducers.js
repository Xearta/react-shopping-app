export const cartReducer = (state = { cartItems: JSON.parse(localStorage.getItem('cartItems')) || '[]' }, action) => {
  switch (action.type) {
    // Add Product To Cart
    case 'ADD_TO_CART':
      return {
        cartItems: action.payload.cartItems,
      };

    // Remove Product From Cart
    case 'REMOVE_FROM_CART':
      return {
        cartItems: action.payload.cartItems,
      };
    default:
      return state;
  }
};
