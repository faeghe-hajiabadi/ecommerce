import {
  LOAD_PRODUCT_FAILURE,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT,
  LOAD_SORT_PRODUCT,
  LOAD_SORT_PRODUCT_SUCCESS,
  LOAD_SORT_PRODUCT_FAILURE
} from "../actions/product";

export const exampleInitialState = {
  products: [],
  loading: true,
  archivePage: 1,
  error: null
};

export default function product(state = exampleInitialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        archivePage: action.data
      };
    case LOAD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LOAD_PRODUCT_SUCCESS:
      const moreProducts = state.products.concat(action.data);
      return {
        ...state,
        loading: false,
        archivePage: state.archivePage + 1,
        products: moreProducts
      };
    case LOAD_SORT_PRODUCT:
      return {
        ...state,
        archivePage: action.data
      };
    case LOAD_SORT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LOAD_SORT_PRODUCT_SUCCESS:
      // const moreProducts = state.products.concat(action.data);
      return {
        ...state,
        loading: false,
        // archivePage: state.archivePage + 1,
        products: action.data
      };
    default:
      return state;
  }
}
