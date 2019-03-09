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
import api from "../services/api";
import axios from "axios";

import {
  LOAD_PRODUCT,
  loadProductSuccess,
  loadProductFailure,
  LOAD_SORT_PRODUCT,
  loadSortProductDataSuccess,
  loadSortProductDataFailure
} from "../actions/product";

es6promise.polyfill();

function fetchDog(action) {
  console.log("fetchDog inside",action)
  if (action.order == 0) {
    console.log("first one")
    return axios({
      method: "get",
      url: `http://localhost:3000//api/products?_sort=size&_page=` + action.page + `&_limit=15`
    });
  } else if (action.order == 1) {
    console.log("sec one")
    return axios({
      method: "get",
      url: `http://localhost:3000/api/products?_sort=price&_page=` + action.page + `&_limit=15`
    });
  } else if (action.order == 2) {
    console.log("third one")
    return axios({
      method: "get",
      url: `http://localhost:3000/api/products?_sort=id&_page=` + action.page + `&_limit=15`
    });
  } else {
    console.log("None")
    return axios({
      method: "get",
      url: `http://localhost:3000/api/products?_page=` + action.page + `&_limit=15`
    });
  }
}
function* productArchive(action) {
  try {
    const response = yield call(fetchDog, action.data);
    const dog = response.data;
    yield put(loadProductSuccess(dog));
  } catch (error) {
    yield put(loadProductFailure(error));
  }
}
function* orderProductArchive(action) {
  console.log("action in order product is 0000",action)
 
    try {
      const response = yield call(fetchDog, action);
      const dog = response.data;
      console.log("this is res of re order",dog)
      yield put(loadSortProductDataSuccess(dog));
    } catch (error) {
      yield put(loadSortProductDataFailure(error));
    }
 
}
function* watchFeatureList() {
  
  yield takeEvery(LOAD_PRODUCT, productArchive);
  yield takeEvery(LOAD_SORT_PRODUCT, orderProductArchive);
}

export default function* ProductSagas() {
  yield fork(watchFeatureList);
}
