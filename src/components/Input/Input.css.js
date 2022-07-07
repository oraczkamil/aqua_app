import styled from 'styled-components/native';
import { input as colors } from '../../utils/theme/colors';
import { input as typography } from '../../utils/theme/typography';
import {TextInput as Input} from "react-native-paper";
import DropDownPicker from 'react-native-dropdown-picker';

export const TextInput = styled(Input)`
    height: ${typography.height};
    border-top-right-radius: ${typography.borderRadius};
    border-top-left-radius: ${typography.borderRadius};
    border-bottom-right-radius: ${typography.borderRadius};
    border-bottom-left-radius: ${typography.borderRadius};
    backgroundColor: ${colors.background};
    border-weight: 0 !important;
    border-color: transparent;
    margin-bottom: ${typography.marginBottom};
`;

export const DropDown = styled(DropDownPicker)`
    font-size: ${typography.fontSize};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-top-width: 0;
    background: ${colors.background},
    border-bottom-color: ${colors.borderColor};
`