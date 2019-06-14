import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;

export const ProductDetails = styled.View`
  padding: 20px;
  padding-top: 30px;
  background-color: white;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 300px;
  border-radius: 8px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ProductTitle = styled.Text`
  color: #555;
  font-size: 14px;
  font-weight: bold;
`;

export const ProductBrand = styled.Text`
  color: #bbb;
  font-size: 11px;
`;

export const ProductPrice = styled.Text`
  color: #37bea9;
  font-size: 18px;
  font-weight: bold;
`;

export const AddCartButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 40px;
  margin-top: 30px;
  border-radius: 3px;
  background: #37bea9;
`;

export const AddCartButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
