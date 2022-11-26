import 'styled-components';
import {theme} from "./styles";

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeProps {}
}