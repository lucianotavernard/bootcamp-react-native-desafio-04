import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import { View } from 'react-native';

import Header from '~/components/Header';

import {
  Container,
  ProductDetails,
  Cover,
  ProductInfo,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  AddCartButton,
  AddCartButtonText,
} from './styles';

class Product extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  handleAddProduct = (product) => {
    const { addProduct } = this.props;

    addProduct(product);
  };

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');

    return (
      <Fragment>
        <Header hasGoBack title="Detalhes do produto" />

        <Container>
          <ProductDetails>
            <Cover source={{ uri: product.image }} />

            <ProductInfo>
              <View>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductBrand>{product.brand}</ProductBrand>
              </View>

              <ProductPrice>{`$ ${product.price}`}</ProductPrice>
            </ProductInfo>

            <AddCartButton onPress={() => this.handleAddProduct(product)}>
              <AddCartButtonText>Adicionar ao carrinho</AddCartButtonText>
            </AddCartButton>
          </ProductDetails>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Product);
