// REACT
import React from "react";

// LIBS
import { Link } from "react-router-dom"
import { List, X } from "phosphor-react";

// STYLES
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import {
  HeaderWrapper,
  ButtonWrapper,
  Logo,
  OpenNav,
  NavigationScreen,
  ClosenNav,
  NavTitle
} from "./styles";

// COMPONENTS
import { Button } from "../../components/Button";

// CONTEXT
import { Context, IGlobalContext } from "../../context/Global";

export function NavMobile({ rightChildren }: any) {

  const { isOpen, setIsOpen } = React.useContext(Context) as IGlobalContext;

  return (
    <ThemeProvider theme={theme}>
      {
        !isOpen && (
          <HeaderWrapper>
            <Logo src="/fav.png" alt="company logo abrr AVT (Avante)" />
            {
              rightChildren
              ?? <OpenNav onClick={() => setIsOpen()}>
                  <List size={50} />
                  </OpenNav>
            }

          </HeaderWrapper>
        )
      }
      {
        isOpen && (
          <NavigationScreen>

            <ClosenNav onClick={() => setIsOpen()}>
              <X size={50} />
            </ClosenNav>
            <NavTitle>Para onde quer ir ?</NavTitle>
            <ButtonWrapper>
              <Link to="/dashboard">
                <Button larger="lg" onClick={() => setIsOpen()} >Dashboard</Button>
              </Link>
              <Link to="/profile">
                <Button larger="lg" onClick={() => setIsOpen()} >Perfil</Button>
              </Link>
              <Link to="/settings">
                <Button larger="lg" onClick={() => setIsOpen()} >Configurações</Button>
              </Link>
            </ButtonWrapper>
          </NavigationScreen>
        )
      }
    </ThemeProvider>
  )
}