import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
  columnWrapperStyle: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
})``;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 48%;
  margin-top: 20px;
  padding: 10px;
  background: white;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 180px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #555;
  font-size: 14px;
  font-weight: bold;
`;

export const Brand = styled.Text`
  margin-bottom: 5px;
  color: #bbb;
  font-size: 11px;
`;

export const Price = styled.Text`
  color: #37bea9;
  font-size: 11px;
  font-weight: bold;
`;
