import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import {
  loadProductData,
  setSortBy,
} from "../actions/product";
import ProductItem from "./ProductItem";
import { Row } from "react-native-easy-grid";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: false,
      price: false,
      id: false,
      r: 0,
      totalData: false
    };
  }
  componentDidMount() {
    this.props.loadProductData(this.props.lastLoadedPageNumber, 0);
  }
  sortBy(order) {
    this.props.setSortBy(this.props.lastLoadedPageNumber, order);

    this.props.loadProductData(this.props.lastLoadedPageNumber, order);
  }

  renderFooter = () => {
    this.setState = { totalData: true };
    const { ended, lastLoadedPageNumber, products } = this.props;
    if (!this.props.loading && ended) return null;
    if (lastLoadedPageNumber >= 50)
      return (
        <Text style={{ textAlign: "center", color: "white" }}>
          End Of catalog
        </Text>
      );

    return <ActivityIndicator style={{ color: "#000" }} />;
  };
  render() {
    const { products, loading, lastLoadedPageNumber, ended } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>sort products by:</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={this.sortBy.bind(this, 1)}
            style={styles.Btn}
          >
            <Text> Size </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Btn}
            onPress={this.sortBy.bind(this, 2)}
          >
            <Text>Id</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Btn}
            onPress={this.sortBy.bind(this, 3)}
          >
            <Text>price</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={styles.list}
          data={products}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            if (item.url) {
              return (
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: item.url }}
                />
              );
            }
            return <ProductItem style={styles.items} items={item} />;
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReached={({ distanceFromEnd }) => {
            if (distanceFromEnd < 10) {
            }
            {
              !this.props.loading &&
                this.props.loadProductData(
                  this.props.lastLoadedPageNumber + 1,
                  0
                );
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  items: {
    backgroundColor: "#CCC"
  },
  list: {
    // flex:1
  },
  text: {
    marginTop: 40,
    textAlign: "left",
    color: "white",
    fontSize: 20
  },
  Btn: {
    color: "white",
    borderRadius: 4,
    borderWidth: 0.5,
    width: "30%",
    textAlign: "center",
    alignItems: "center",
    padding: 5,
    margin: 5,
    marginBottom: 10,
    borderColor: "#d6d7da",
    backgroundColor: "#f6e58d"
  }
});

const mapDispatchToProps = dispatch => ({
  loadProductData: (pageNumber, order) => {
    dispatch(loadProductData(pageNumber, order));
    dispatch(loadAds());
  },
  setSortBy: order => dispatch(setSortBy(order)),
 
});
const mapStateToProps = state => ({
  products: state.products,
  lastLoadedPageNumber: state.archivePage,
  loading: state.loading,
  sortby: state.sortby,
  ended: state.ended,
  fetchProducts: state.fetchProducts
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
