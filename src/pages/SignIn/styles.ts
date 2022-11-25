import styled from 'styled-components'

export const Container = styled.div`
    padding-inline: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${80 / 16}rem 1rem ${50 / 16}rem 1rem;
`;

export const Logo = styled.div`
    background-image: url("/public/fav.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    margin-bottom: ${40/16}rem;
`;

export const WelcomeText = styled.h3`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: ${({theme}) => theme.white.colors.WHITE[900]};
`;