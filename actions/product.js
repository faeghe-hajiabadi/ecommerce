

export const LOAD_PRODUCT_FAILURE =
  "LOAD_PRODUCT_FAILURE";
export const LOAD_PRODUCT_SUCCESS =
  "LOAD_PRODUCT_SUCCESS";
export const LOAD_PRODUCT = "LOAD_PRODUCT";

export function loadProductData(data) {
  console.log("data in action",data)
  return {
    type: LOAD_PRODUCT,
    data
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
