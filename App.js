import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";

import product from "./reducers/product";
import Product from "./components/Product";

import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(product, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    console.log("here is App.js")
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Text style={styles.text}>Emoji Store</Text>
          <Product />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7ecee"
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
  text: {
    marginTop: 40,
    textAlign: "center",
    color: "#4834d4",
    fontSize: 25,
    padding: 10
  }
});
