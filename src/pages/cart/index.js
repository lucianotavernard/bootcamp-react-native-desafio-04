import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import Header from '~/components/Header';

import {
  Container,
  CartList,
  CartItem,
  ProductInfo,
  Cover,
  Title,
  Brand,
  Price,
  Button,
  RemoveIcon,
  Subtotal,
  SubTotalText,
  SubtotalPrice,
} from './styles';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
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
    total: PropTypes.number.isRequired,
    removeProduct: PropTypes.func.isRequired,
  };

  handleRemoveProduct = (id) => {
    const { removeProduct } = this.props;

    removeProduct(id);
  };

  render() {
    const { cart, total } = this.props;

    return (
      <Fragment>
        <Header title="Carrinho" />

        <Container>
          <CartList
            data={cart.data}
            keyExtractor={(product, index) => String(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: product }) => (
              <CartItem>
                <Cover source={{ uri: product.image }} />

                <ProductInfo>
                  <Title>{product.name}</Title>
                  <Brand>{product.brand}</Brand>
                  <Price>{`$ ${product.price}`}</Price>
                </ProductInfo>

                <Button onPress={() => this.handleRemoveProduct(product.id)}>
                  <RemoveIcon />
                </Button>
              </CartItem>
            )}
          />

          <Subtotal>
            <SubTotalText>Subtotal</SubTotalText>
            <SubtotalPrice>{`$ ${total.toFixed(2)}`}</SubtotalPrice>
          </Subtotal>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart,
  total: cart.data.reduce((accu, curr) => accu + curr.price, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
