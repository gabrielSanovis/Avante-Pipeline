import { CaretCircleDown, CaretCircleUp, Medal } from "phosphor-react";
import { theme } from "../../../../style/theme";
import {
    BackgroundItem,
    PositionWrapper,
    RankContentWrapper,
    RankImg,
    RankList,
    RankText,
    SmallText,
    StatisticSection,
    StrongTitle,
  } from "./styles";

export const Statistic = () => {
    return(
        <StatisticSection>
          <StrongTitle>Estatísticas</StrongTitle>
          <SmallText>Classificação</SmallText>
          <RankList>
            <BackgroundItem>
              <PositionWrapper>
                <Medal size={25} color={theme.white.colors.WHITE[900]} />
                <RankText>1°</RankText>
              </PositionWrapper>
              <RankContentWrapper>
                <RankImg src="/Avante-Pipeline/fav.png" alt="company logo abrr AVT (Avante)" />
                <RankText>
                  Vanessa de Souza
                </RankText>
              </RankContentWrapper>
            </BackgroundItem>

            <BackgroundItem>
              <PositionWrapper>
                <Medal size={25} color={theme.white.colors.WHITE[900]} />
                <RankText>99°</RankText>
              </PositionWrapper>
              <RankContentWrapper>
                <RankImg src="/Avante-Pipeline/fav.png" alt="company logo abrr AVT (Avante)" />
                <RankText>
                  Gabriel dos Santos 
                </RankText>
                <CaretCircleUp size={25} weight="fill" color={theme.white.colors.GREEN[400]} />
              </RankContentWrapper>
            </BackgroundItem>
            
            <BackgroundItem>
              <PositionWrapper>
                <Medal size={25} color={theme.white.colors.WHITE[900]} />
                <RankText>100°</RankText>
              </PositionWrapper>
              <RankContentWrapper>
                <RankImg src="/Avante-Pipeline/fav.png" alt="company logo abrr AVT (Avante)" />
                <RankText>
                  Robson Barbosa 
                </RankText>
                <CaretCircleDown size={25} weight="fill" color={theme.white.colors.RED[500]} />
              </RankContentWrapper>
            </BackgroundItem>
          </RankList>
        </StatisticSection>
    );
}