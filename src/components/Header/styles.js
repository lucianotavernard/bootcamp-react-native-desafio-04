import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  background: white;
`;

export const Title = styled.Text`
  color: #ff9696;
  font-size: 16px;
  font-weight: bold;
`;

export const Left = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
  activeOpacity: 0.2,
})`
  padding: 0 20px;
`;

export const Right = styled.View`
  padding: 0 20px;
`;
