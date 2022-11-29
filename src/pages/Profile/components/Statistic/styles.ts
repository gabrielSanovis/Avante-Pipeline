import styled from "styled-components";

export const StatisticSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin-inline: auto;
`;

export const StrongTitle = styled.h4`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.medium};
    font-size: 20px;
    line-height: 23px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    align-self: flex-start;
`;

export const SmallText = styled.p`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 13px;
    line-height: 15px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    margin-top: 8px;
    margin-bottom: 8px;
    max-width: 500px;
    align-self: flex-start;
`;

export const RankList = styled.ol`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
    max-width: 500px;
`;

export const BackgroundItem = styled.li`
    background-color: ${({ theme: { white } }) => white.colors.GREEN[900]};
    padding: 8px 16px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
    border-radius: 8px;
    display: flex;
    column-gap: 16px;
`;

export const PositionWrapper = styled.div`
    display: flex;
    column-gap: 2px;
    align-items: center;
    width: 60px;
`;

export const RankContentWrapper = styled.div`
    display: flex;
    column-gap: 8px;
    align-items: center;
    flex: 1;
`;

export const RankText = styled.p`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 16px;
    line-height: 18px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    flex: 1;
    text-align: start;
`;

export const RankImg = styled.img`
    object-fit: contain;
    width: 25px;
    height: 25px;
`;