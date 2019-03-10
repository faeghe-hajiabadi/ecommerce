import { all } from 'redux-saga/effects';
import ProductSagas from './ProductSagas';

export default function* rootSaga() {
  
  yield all([    
    ProductSagas(),
   
  ])
}
