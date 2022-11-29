import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.main`
    text-align: center;
    padding-bottom: 70px;
`;

export const Title = styled.h1`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.bold};
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    margin-top: 80px;
    margin-bottom: 40px;
`;

export const SubTitle = styled.h3<{ uppercase?: boolean}>`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.bold};
    font-size: 20px;
    line-height: 23px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    margin-bottom: 16px;
    text-transform: ${({ uppercase }) => uppercase ? "uppercase" : "none"};
`;

export const StrongText = styled.p<{ uppercase?: boolean, withIcon?: boolean }>`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.medium};
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    margin-bottom: 24px;
    text-transform: ${({ uppercase }) => uppercase ? "uppercase" : "none"};
    width: 300px;
    margin-inline: auto;
    ${({ withIcon }) => withIcon
        ? css`
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 8px;
        `
        : css``
    }

`;

export const ListMainCourse = styled.ul`
    margin-bottom: 56px;
`;

export const NavLocal = styled.a`
    text-decoration: none;
    :hover {
        text-decoration: underline 2px white;
    }
`;

export const SignUpLink = styled(Link)`
    bottom: 20px;
    position: fixed;
    display: flex;
    justify-content: center;
    text-decoration: none;
    left: 20%;
    right: 20%;
`;