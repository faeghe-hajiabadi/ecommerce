import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  List,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { loadProductData } from "../actions/product";
import ProductItem from "./ProductItem";
import { Col, Row, Grid } from "react-native-easy-grid";

class Product extends Component {
  componentDidMount() {
    this.props.loadProductData(this.props.lastLoadedPageNumber);
    console.log("this is componentdidmounth");
  }
  render() {
    const { products,loading } = this.props;
    console.log("this is products in product component:", products);
    let data;
    if (products) {
      data = products.map(item => {
        return <ProductItem items={item} />;
      });
    }
    return (
      <View>
        {loading && (
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {!loading && (
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            numColumns={2}
            renderItem={({ item }) => <Row style={styles.items}>{item}</Row>}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  items: {
    flex: 2,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 304,
    maxHeight: 304,
    backgroundColor: "#CCC"
  },
  list: {
    // justifyContent: 'center',
    flexDirection: "column"
  }
});

const mapDispatchToProps = dispatch => ({
  loadProductData: pageNumber => dispatch(loadProductData(pageNumber))
});
const mapStateToProps = state => ({
  products: state.products,
  lastLoadedPageNumber: state.archivePage,
  loading: state.loading
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
