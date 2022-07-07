import metrics from "../../utils/theme/metrics";
import {Calendar} from "react-native-calendars/src/index";
import { schedule as colors } from "../../utils/theme/colors";
import styled from 'styled-components/native';

export const CustomCalendar = styled(Calendar)`
   height: ${metrics.screenHeight};
   background: ${colors.background};
`;