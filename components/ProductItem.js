import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList, List } from "react-native";
import { connect } from "react-redux";
import { loadProductData } from "../actions/product";
import { Col, Row, Grid } from "react-native-easy-grid";


export default class ProductItem extends Component {
  convertTime(date) {
    var dt = new Date(date);

    var currentTime = new Date();

    var diff = Math.abs(currentTime - dt);
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    if (diffDays >= 7) {
      return date;
    } else {
      return `${diffDays} days ago`;
    }
  }
  render() {
    const { item } = this.props;
    // const item = {
    //   date: "Sat Aug 31 2019 11:36:01 GMT+0430 (Iran Daylight Time)",
    //   face: "( .-. )",
    //   id: "95168-lb3f8rm2d7q",
    //   price: 540,
    //   size: 17,
    // }
    console.log("this is item",item)
    return (
      <View  style={styles.container}>
        <Text style={{ fontSize: item.size }}> {item.face}</Text>
        <Text style={styles.id}>id:{item.id}</Text>
        <Text>size:{item.size}</Text>
        <Text>price:{item.price * 0.01}</Text>
        <Text style={styles.date}>Date:{this.convertTime(item.date)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#95afc0",
    width: 30
  },
  id: {
    fontSize: 14,
    margin: 10
  },

  date: {
    fontWeight: "300"
  }
});
