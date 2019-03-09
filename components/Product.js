import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  List,
  ActivityIndicator,
  Button
} from "react-native";
import { connect } from "react-redux";
import { loadProductData,loadSortProductData } from "../actions/product";
import ProductItem from "./ProductItem";
import { Col, Row, Grid } from "react-native-easy-grid";
import DropdownMenu from "react-native-dropdown-menu";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: false,
      price: false,
      id: false
    };
  }
  componentDidMount() {
    this.props.loadProductData(this.props.lastLoadedPageNumber);
    console.log("this is componentdidmounth");
  }
  sortBy(order){
    console.log("here is sortby and order is",order)
    this.props.loadSortProductData(this.props.lastLoadedPageNumber,order);
  }
  render() {
    const { products, loading } = this.props;
    console.log("this is products in product component:", products);
    console.log("page:", this.props.lastLoadedPageNumber);
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
            <ActivityIndicator size="large" color="white" animating="true" />
          </View>
        )}
        {!loading && (
          <View>
            <Text style={styles.text}>sort products by:</Text>
            <Button
              onPress={this.sortBy.bind(this,0)}
              title="size"
              color="white"
              
            />
              <Button
              onPress={this.sortBy.bind(this,1)}
              title="id"
              color="white"
              
            />
              <Button
              onPress={this.sortBy.bind(this,2)}
              title="price"
              color="white"
              
            />

            <FlatList
              contentContainerStyle={styles.list}
              data={data}
              progressViewOffset
              numColumns={2}
              renderItem={({ item }) => <Row style={styles.items}>{item}</Row>}
              onEndReachedThreshold={0.8}
              onEndReached={({ distanceFromEnd }) => {
                this.props.loadProductData(this.props.lastLoadedPageNumber + 1);
              }}
            />
          </View>
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
  },
  text: {
    marginTop: 60,
    textAlign: "left",
    color: "white",
    fontSize: 20
  }
});

const mapDispatchToProps = dispatch => ({
  loadProductData: pageNumber => dispatch(loadProductData(pageNumber)),
  loadSortProductData: (pageNumber,order) => dispatch(loadSortProductData(pageNumber,order))
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
