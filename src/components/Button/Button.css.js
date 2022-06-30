import styled from 'styled-components/native';
import { button } from '../../utils/theme/colors';

export const CustomButton = styled.Pressable`
    height: 50px;
    backgroundColor: ${button.background};
    border: ${button.border.size} ${button.border.type} ${button.border.color};
    width:100%;
    justify-content:center;
    align-items:center;
`;

export const Text = styled.Text`
    color: ${button.color};
`;