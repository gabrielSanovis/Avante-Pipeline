import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${80 / 16}rem 0rem ${50 / 16}rem 0rem;
    width: 100vw;
    text-align: center;
`;

export const Logo = styled.div`
    background-image: url("/fav.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    margin-bottom: ${40 / 16}rem;
`;

export const WelcomeText = styled.h3`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.medium};
    font-size: 24px;
    line-height: 28px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    margin-bottom: ${70/16}rem;
`;

export const FieldWrapper = styled.div`
    width: 90%;
    max-width: 500px;
    margin-bottom: ${48/16}rem;
`;

export const ChangeButton = styled.button`
    border: none;
    padding: 0;
    color: transparent;
    border-radius: 25px;
    background-color: transparent;
    cursor: pointer;
    height: 32px;
    :focus {
        outline: none;
    }
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;