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
    const { items } = this.props;

    return (
      <View size={75} style={styles.container}>
        <Text style={{ fontSize: items.size }}> {items.face}</Text>
        <Text style={styles.id}>id:{items.id}</Text>
        <Text>size:{items.size}</Text>
        <Text>price:{items.price * 0.01}</Text>
        <Text style={styles.date}>Date:{this.convertTime(items.date)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
