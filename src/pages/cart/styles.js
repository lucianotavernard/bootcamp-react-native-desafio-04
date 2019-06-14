import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  padding: 20px 0 0;
  background: #f5f5f5;
`;

export const CartList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})``;

export const CartItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 3px;
  background: white;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 60px;
  height: 80px;
  margin-left: -15px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  height: 100px;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #555;
  font-size: 16px;
  font-weight: bold;
`;

export const Brand = styled.Text`
  margin-bottom: 5px;
  color: #bbb;
  font-size: 11px;
`;

export const Price = styled.Text`
  color: #37bea9;
  font-size: 12px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

export const RemoveIcon = styled(Icon).attrs({
  size: 20,
  name: 'close',
  color: '#BBB',
})``;

export const Subtotal = styled.View`
  justify-content: center;
  align-items: center;

  height: 100px;
  border-top-width: 3px;
  border-top-color: #f5f5f5;
  background-color: white;
`;

export const SubTotalText = styled.Text`
  margin-bottom: 5px;
  color: #aaa;
  font-size: 12px;
  font-weight: bold;
`;

export const SubtotalPrice = styled.Text`
  color: #37bea9;
  font-size: 18px;
  font-weight: bold;
`;
