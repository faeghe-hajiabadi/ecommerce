

export const LOAD_PRODUCT_FAILURE =
  "LOAD_PRODUCT_FAILURE";
export const LOAD_PRODUCT_SUCCESS =
  "LOAD_PRODUCT_SUCCESS";
export const LOAD_PRODUCT = "LOAD_PRODUCT";

export const LOAD_SORT_PRODUCT_FAILURE =
  "LOAD_SORT_PRODUCT_FAILURE";
export const LOAD_SORT_PRODUCT_SUCCESS =
  "LOAD_SORT_PRODUCT_SUCCESS";
export const LOAD_SORT_PRODUCT = "LOAD_SORT_PRODUCT";


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


 export function loadSortProductData(data,order){
   console.log("action and data is",data,order)
  return {
    type: LOAD_SORT_PRODUCT,
    data,
    order
  };
 }
 export function loadSortProductDataSuccess(data){
   console.log("this is reOrder result ",data)
  return {
    type: LOAD_SORT_PRODUCT_SUCCESS,
    data
  };
 }
 export function loadSortProductDataFailure(err){
  return {
    type: LOAD_SORT_PRODUCT_FAILURE,
    err
  };
 }