import styled from 'styled-components/native';
import {DataTable} from "react-native-paper";
import { datatable as colors } from '../../utils/theme/colors';
import { datatable as typography } from '../../utils/theme/typography';

export const Row = styled(DataTable.Row)`
    padding: ${typography.padding};
    border-bottom-width: ${typography.borderWidth};
    border-bottom-color: ${colors.borderColor};
`;

export const Cell = styled(DataTable.Cell)`
    
`;

export const Text = styled.Text`
    font-size: ${typography.fontSize};
`;