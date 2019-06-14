import React from 'react';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container, Title, Left, Right,
} from './styles';

const Header = ({ title, hasGoBack, navigation }) => (
  <Container>
    <Left onPress={() => navigation.navigate('Main')}>
      {hasGoBack ? <Icon name="ios-arrow-back" size={20} color="#bbb" /> : null}
    </Left>

    <Title>{title}</Title>

    <Right />
  </Container>
);

Header.defaultProps = {
  hasGoBack: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasGoBack: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Header);
