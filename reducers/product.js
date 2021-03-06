import {
  LOAD_PRODUCT_FAILURE,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT,
  SET_SORTBY
} from "../actions/product";


export const exampleInitialState = {
  products: [],
  loading: true,
  archivePage: 1,
  error: null,
  sortby: 0,
  ads: [],
  ended: false,
  fetchProducts: [],
  uniqueNumber: 0,
  endOfCatalog: "End Of Cataloge"
};

const generateRandom = uniqueNumber => {
  var random = Math.floor(Math.random() * 2000);
  if (uniqueNumber != random) return random;
  return generateRandom(uniqueNumber);
};
export default function product(state = exampleInitialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        archivePage: action.data,
        loading: true
      };
    case LOAD_PRODUCT_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LOAD_PRODUCT_SUCCESS:
        console.log("load-product-action",action.data)
      if (action.data.length === 0) {
        return {
          ...state,
          ended: true
        };
      }
      const moreProducts = state.products.concat(action.data);
      console.log("moreProducts",moreProducts)
      const randomNum = generateRandom(state.uniqueNumber);

      moreProducts.push({
        url: `http://localhost:3000/ads/?r=` + randomNum,
        id: randomNum
      });
      return {
        ...state,
        loading: false,
        archivePage: state.archivePage + 1,
        products: moreProducts,
        uniqueNumber: randomNum
      };

    case SET_SORTBY:
      return {
        ...state,
        archivePage: 0,
        products: [],
        sortby: action.data
      };

    default:
      return state;
  }
}
