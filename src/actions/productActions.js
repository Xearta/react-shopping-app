export const fetchProducts = () => {
  return dispatch => {
    fetch('/products')
      .then(res => res.json())
      .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }));
  };
};
