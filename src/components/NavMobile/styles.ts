import styled from "styled-components";

export const HeaderWrapper = styled.div`
    flex: 1;
    height: 68px;
    background-color: ${({ theme: { white } }) => white.colors.GREEN[900]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 32px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
`;

export const Logo = styled.img`
    object-fit: contain;
    width: 58px;
    height: 58px;
`;

export const OpenNav = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: fit-content;
    color: ${({ theme: { white } }) => white.colors.WHITE[0]};
    :focus {
        color: ${({ theme: { white } }) => white.colors.GREEN[400]};
    }
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const ClosenNav = styled.button`
    margin-right: 32px;
    margin-top: 8px;
    margin-bottom: 80px;
    align-self: flex-end;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: fit-content;
    color: ${({ theme: { white } }) => white.colors.WHITE[0]};
    :focus {
        color: ${({ theme: { white } }) => white.colors.GREEN[400]};
    }
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const NavTitle = styled.h4`
    font-weight: ${({theme: {fonts}}) => fonts.weight.bold};
    color: ${({theme: {white}}) => white.colors.WHITE[900]};
    text-transform: uppercase;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 62px;
`;

export const NavigationScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme: { white } }) => white.colors.GREEN[800]};
    display: flex;
    flex-direction: column;
`;