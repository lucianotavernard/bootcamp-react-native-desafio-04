import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Main from '~/pages/main';
import Cart from '~/pages/cart';
import Product from '~/pages/product';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Products: createSwitchNavigator({
        Main,
        Product,
      }),
      Cart,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;

          const iconName = routeName === 'Products' ? 'home' : 'shopping-cart';

          return <Icon name={iconName} size={20} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#FF9696',
        inactiveTintColor: '#C0C0C0',
      },
    },
  ),
);

export default Routes;
