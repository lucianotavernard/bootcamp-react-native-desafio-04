import styled from 'styled-components/native';

export const Container = styled.View``;

export const CategoriesList = styled.FlatList``;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px 20px 8px;
  border-bottom-width: 3px;
  border-bottom-color: ${({ active }) => (active ? 'white' : 'transparent')};
  background: #ff9696;
`;

export const CategoryText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
`;
