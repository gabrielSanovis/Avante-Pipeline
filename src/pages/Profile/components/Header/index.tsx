import { CloudArrowUp, Cpu } from "phosphor-react";
import { theme } from "../../../../style/theme";
import {
  HeaderContainer,
  HeaderContentWrapper,
  HeaderTitle,
  IconsWrapper,
  Logo,
  RememberDate,
} from "./styles";

interface IHeaderProps {
  welcome: string;
}

export const Header: React.FC<IHeaderProps> = ({ welcome }) => {
  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <HeaderTitle>{welcome} Gustavo Vieira!</HeaderTitle>
        <RememberDate>Por aqui desde setembro de 2022</RememberDate>
        <IconsWrapper>
          <Cpu size={30} color={theme.white.colors.WHITE[900]} />
          <CloudArrowUp size={30} color={theme.white.colors.WHITE[900]} />
        </IconsWrapper>
      </HeaderContentWrapper>
      <Logo src="/Avante-Pipeline/fav.png" alt="company logo abrr AVT (Avante)" />
    </HeaderContainer>
  );
}