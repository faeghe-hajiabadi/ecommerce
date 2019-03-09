import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList, List } from "react-native";
import { connect } from "react-redux";
import { loadProductData } from "../actions/product";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ProductItem extends Component {
   
  render() {
    const { items } = this.props;
    // console.log("here is item and items are", items);
    return (
      <View size={75} style={styles.container}>
        
       <Text style={{fontSize:items.size}}> {items.face}</Text>
         <Text style={styles.id}>id:{items.id}</Text> 
          <Text>size:{items.size}</Text>
          <Text>price:{items.price}</Text>
          
        
        
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
    borderColor: '#95afc0',
    width:30,
    
  
  },
  id: {
    fontSize: 14,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
