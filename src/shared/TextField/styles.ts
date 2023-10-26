import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from 'styled-components/native';
import { theme } from '../themes/styles';

export const Container = styled.View`
  width: 80%;
`;

export const NormalText = styled.Text`
  color: ${theme.colors.text};
  font-size: 12px;
`;

export const InputContainer = styled.View`
  min-height: 50px;
  flex-direction: row;
  padding: 0px 15px;
  border-width: 1px;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0px;
  border-color: #d3d3d3;
  width: 100%;
`;

export const NormalIcon = styled(MaterialCommunityIcons)`
  color: ${theme.colors.primary};
  margin-right: 10px;
`;

export const TextInputField: any = styled.TextInput<{ isEditable: boolean }>`
  flex: 1;
  color: ${(props: any) => (props.isEditable ? theme.colors.text : '#c3c3c3')};
  font-size: 12px;
`;

export const ErrorMessageText = styled.Text`
  color: ${theme.colors.danger};
  align-self: stretch;
  font-size: 12px;

`;
