import { all } from 'redux-saga/effects';
import ProductSagas from './ProductSagas';

export default function* rootSaga() {
  console.log("here is rootsaga")
  yield all([    
    ProductSagas(),
   
  ])
}
