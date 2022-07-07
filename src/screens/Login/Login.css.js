import styled from 'styled-components/native';
import { login as colors } from '../../utils/theme/colors';
import { login as typography } from '../../utils/theme/typography';

export const Wrapper = styled.View`
    background: ${colors.background};
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.Pressable`
    background: ${colors.buttonBackground};
    height: ${typography.buttonHeihgt};
    justify-content: center;
    align-items: center;
    border-top-right-radius: ${typography.buttonBorderRadius};
    border-top-left-radius: ${typography.buttonBorderRadius};
    border-bottom-right-radius: ${typography.buttonBorderRadius};
    border-bottom-left-radius: ${typography.buttonBorderRadius};
    width: ${typography.buttonWidth};
`

export const Text = styled.Text`
    color: ${colors.buttonColor};
    font-size: ${typography.fontSize};

`