// LIBS
import { Link } from "react-router-dom"

// STYLES
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import { NavMobile } from "../../components/NavMobile";
import {
  Container,
  WrapperNav
} from "./styles";
import { Button } from "../../components/Button";
import { Statistic } from "./components/Statistic";
import { Header } from "./components/Header";
import { words } from "./mock";

export function Profile() {

  const {btn, header} = words;

  return (
    <ThemeProvider theme={theme}>

      <NavMobile />

      <Container>

        <Header
          welcome={header.welcome.pt}
        />

        <WrapperNav>
          <Link to="/profile/update-profile">
            <Button larger="lg">
              {btn.changeProfile.pt}
            </Button>
          </Link>
          <Link to="/profile/update-password">
            <Button larger="lg">
              {btn.changePassword.pt}
            </Button>
          </Link>
        </WrapperNav>

        <Statistic />

      </Container>

    </ThemeProvider>
  )
}