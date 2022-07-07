import styled from 'styled-components/native';
import { button } from '../../utils/theme/colors';
import { login as colors } from '../../utils/theme/colors';
import { login as typography } from '../../utils/theme/typography';

export const CustomButton = styled.Pressable`
    background: ${colors.buttonBackground};
    height: ${typography.buttonHeihgt};
    justify-content: center;
    align-items: center;
    border-top-right-radius: ${typography.buttonBorderRadius};
    border-top-left-radius: ${typography.buttonBorderRadius};
    border-bottom-right-radius: ${typography.buttonBorderRadius};
    border-bottom-left-radius: ${typography.buttonBorderRadius};
    width: 100%;
    margin-bottom: 10px;
`;

export const Text = styled.Text`
color: ${colors.buttonColor};
font-size: ${typography.fontSize};
`;