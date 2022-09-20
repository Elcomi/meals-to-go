import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  padding: ${props => props.theme.space[3]};
`;

export const Photo = styled(Card.Cover)`
  padding: 15px;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled(Card.Content)`
  padding: ${props => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex: 1;
  padding-top: ${props => props.theme.space[2]};
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Open = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
