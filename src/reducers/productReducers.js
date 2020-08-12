export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    // Fetch all Products
    case 'FETCH_PRODUCTS':
      return { items: action.payload, filteredItems: action.payload };

    // Filter Products By Size
    case 'FILTER_PRODUCTS_BY_SIZE':
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };

    // Order The Products By Price
    case 'ORDER_PRODUCTS_BY_PRICE':
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };

    default:
      return state;
  }
};
