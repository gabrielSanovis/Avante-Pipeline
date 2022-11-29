import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    margin-block: 40px;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h4`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 24px;
    line-height: 36px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    text-align: start;
`;

export const HeaderContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`;

export const Logo = styled.img`
    object-fit: contain;
    width: 40px;
    height: 40px;
`;

export const RememberDate = styled.p`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
`;

export const IconsWrapper = styled.div`
    display: flex;
    column-gap: 4px;
`;
