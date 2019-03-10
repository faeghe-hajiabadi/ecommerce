import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import product from "./reducers/product";
import Product from "./components/Product";
import { Col, Row, Grid } from "react-native-easy-grid";

import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(product, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <Text style={styles.text}>this is our products</Text>
          <Product />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7ecee",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  text:{
    marginTop:40,
    textAlign:'center',
    color:'white',
    fontSize:20
  }
});
