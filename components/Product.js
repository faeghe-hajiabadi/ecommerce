import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import { loadProductData, setSortBy } from "../actions/product";
import ProductItem from "./ProductItem";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;

  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: false,
      price: false,
      id: false,
      r: 0,
      totalData: false,
      tempProduct: [],
      reachToEnd: false
    };
  }
  componentDidMount() {
    this.props.loadProductData(this.props.lastLoadedPageNumber, 0);
  }
  sortBy(order) {
    this.props.setSortBy(this.props.lastLoadedPageNumber, order);
    this.setState({ tempProduct: "" });
    this.props.loadProductData(this.props.lastLoadedPageNumber, order);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.products.length != prevState.tempProduct.length &&
      prevState.reachToEnd
    ) {
      return {
        ...prevState,
        reachToEnd: false,
        tempProduct: nextProps.products
      };
    }
    if (prevState.tempProduct.length == 0) {
      return {
        ...prevState,
        tempProduct: nextProps.products
      };
    } else
      return {
        ...prevState
      };
  }

  renderFooter = () => {
    const { ended } = this.props;
    if (!this.props.loading && ended) return null;
    if (ended) return <Text style={styles.endText}>End Of catalog</Text>;

    return <ActivityIndicator style={{ color: "#000" }} />;
  };
  render() {
    const { products, loading } = this.props;

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
          data={this.state.tempProduct}
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
            {
              !loading &&
                this.props.loadProductData(
                  this.props.lastLoadedPageNumber + 1,
                  0
                );
            }
          }}
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              this.setState({ tempProduct: products });
              this.setState({ reachToEnd: true });
            }
          }}
          scrollEventThrottle={400}
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
  text: {
    marginLeft: 10,
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
    backgroundColor: "#f9ca24"
  },
  endText: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#95afc0",
    padding: 10
  }
});

const mapDispatchToProps = dispatch => ({
  loadProductData: (pageNumber, order) => {
    dispatch(loadProductData(pageNumber, order));
  },
  setSortBy: order => dispatch(setSortBy(order))
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
