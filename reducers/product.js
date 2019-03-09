import{
    LOAD_PRODUCT_FAILURE,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT,
  } from '../actions/product';

  export const exampleInitialState = {
    products: [
   

    ],
    loading:true,
    archivePage: 1 ,
    error: null,
  }
  
  export default function product (state = exampleInitialState, action) {
    switch (action.type) {
      case LOAD_PRODUCT:
      console.log("here is reducer")
        return {
          ...state,
          archivePage: action.data
        }
      case LOAD_PRODUCT_FAILURE:
        return {
          ...state,
          loading:false,
          error: action.error
        }
      case LOAD_PRODUCT_SUCCESS:
        console.log("this is successful in reducer")
        const moreProducts = state.products.concat(
          action.data
        );  
        return {
          ...state,
          loading:false,
          archivePage: state.archivePage + 1,
          products: moreProducts
        }
      default: 
        return state
    }
    
  }
  