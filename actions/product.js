export const LOAD_PRODUCT_FAILURE = "LOAD_PRODUCT_FAILURE";
export const LOAD_PRODUCT_SUCCESS = "LOAD_PRODUCT_SUCCESS";
export const LOAD_PRODUCT = "LOAD_PRODUCT";

export const LOAD_SORT_PRODUCT_FAILURE = "LOAD_SORT_PRODUCT_FAILURE";
export const LOAD_SORT_PRODUCT_SUCCESS = "LOAD_SORT_PRODUCT_SUCCESS";
export const LOAD_SORT_PRODUCT = "LOAD_SORT_PRODUCT";

export const SET_SORTBY = "SET_SORTBY";

export function loadProductData(data, order) {
  return {
    type: LOAD_PRODUCT,
    data,
    order
  };
}

export function loadProductSuccess(data) {
  return {
    type: LOAD_PRODUCT_SUCCESS,
    data
  };
}
export function loadProductFailure(err) {
  return {
    type: LOAD_PRODUCT_FAILURE,
    err
  };
}

export function setSortBy(data) {
  return {
    type: SET_SORTBY,
    data
  };
}
