/* global fetch */

import {all, call, put, fork, take, takeLatest, takeEvery} from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import api from '../services/api';
import axios from "axios";

import { 
  LOAD_PRODUCT,
  loadProductSuccess,
  loadProductFailure,
    
} from '../actions/product';

es6promise.polyfill();

function fetchDog(page) {
  return axios({
    method: "get",
    url: `http://localhost:3000/products?page=`+ (page) + `&_limit=15`
  });
}
function* productArchive(page) {

  try {
    const response = yield call(fetchDog);
    const dog = response.data;
    console.log("response is ",dog)

    // dispatch a success action to the store with the new dog
    // yield put({ type: "API_CALL_SUCCESS", dog });
    yield put(loadProductSuccess(dog));
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    // yield put({ type: "API_CALL_FAILURE", error });
    yield put(loadProductFailure(error));
  }
}


function* watchFeatureList() {
  console.log("this is first of saga")
  yield takeEvery(LOAD_PRODUCT, productArchive);
}


export default function* ProductSagas() {
  yield fork(watchFeatureList);
  
}