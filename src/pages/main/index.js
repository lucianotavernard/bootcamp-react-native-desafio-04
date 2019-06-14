import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import Header from '~/components/Header';
import Categories from '~/components/Categories';

import {
  Container, ProductsList, Product, Cover, Title, Brand, Price,
} from './styles';

class Main extends Component {
  static propTypes = {
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          name: PropTypes.string,
          brand: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }).isRequired,
    categorySelected: PropTypes.number.isRequired,
    loadProductsRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  };

  componentDidMount() {
    const { loadProductsRequest } = this.props;

    loadProductsRequest(1);
  }

  handleProductPress = (product) => {
    const { navigation } = this.props;

    navigation.navigate('Product', { product });
  };

  handleProductsRefreshing = () => {
    const { loadProductsRequest, categorySelected } = this.props;

    loadProductsRequest(categorySelected);
  };

  render() {
    const { products } = this.props;

    return (
      <Fragment>
        <Header title="GoCommerce" />

        <Categories />

        <Container>
          <ProductsList
            numColumns={2}
            data={products.data}
            refreshing={products.loading}
            onRefresh={this.handleProductsRefreshing}
            keyExtractor={product => String(product.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Product onPress={() => this.handleProductPress(item)}>
                <Cover source={{ uri: item.image }} />
                <Title>{item.name}</Title>
                <Brand>{item.brand}</Brand>
                <Price>{`$ ${item.price}`}</Price>
              </Product>
            )}
          />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  categorySelected: state.categories.selected,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
