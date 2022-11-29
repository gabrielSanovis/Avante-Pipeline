import 'styled-components';
import {theme} from "./styles";

import 'styled-components';
import { IThemeProps } from '../@types';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeProps {}
}