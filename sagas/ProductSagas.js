/* global fetch */

import {
  all,
  call,
  put,
  fork,
  take,
  takeLatest,
  takeEvery
} from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import axios from "axios";

import {
  LOAD_PRODUCT,
  loadProductSuccess,
  loadProductFailure,
} from "../actions/product";

es6promise.polyfill();

function fetchDog(action) {
  
  if (action.order == 1) {
    
    return axios({
      method: "get",
      url: `http://localhost:3000/api/products?_sort=size&_page=` + action.data + `&_limit=20`
    });
  } else if (action.order == 2) {
    
    return axios({
      method: "get",
      url: `http://localhost:3000/api/products?_sort=id&_page=` + action.data + `&_limit=20`
      
    });
  } else if (action.order == 3) {
    
    return axios({
      method: "get",
      url: `http://localhost:3000/api/products?_sort=price&_page=` + action.data + `&_limit=20`
      
    });
  } else {
    console.log("None")
    return axios({
      method: "get",
      url: `http://localhost:3000/api/products?_page=` + action.data + `&_limit=20`
    });
  }
}
function* productArchive(action) {
  
  try {
    const response = yield call(fetchDog, action);
    const dog = response.data;
    yield put(loadProductSuccess(dog));
  } catch (error) {
    yield put(loadProductFailure(error));
  }
}

function* watchFeatureList() {
  
  yield takeEvery(LOAD_PRODUCT, productArchive);
  
  
}

export default function* ProductSagas() {
  yield fork(watchFeatureList);
}
