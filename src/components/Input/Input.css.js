import styled from 'styled-components/native';
import { input as colors } from '../../utils/theme/colors';
import { input as typography } from '../../utils/theme/typography';
import {TextInput as Input} from "react-native-paper";

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