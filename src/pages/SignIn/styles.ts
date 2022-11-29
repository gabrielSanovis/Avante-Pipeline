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

export const Form = styled.form`
    width: 90%;
    display: flex;
    row-gap: ${48/16}rem;
    flex-direction: column;
    align-items: center;
`;

export const FieldWrapper = styled.div`
    width: 100%;
    max-width: 500px;
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

export const RememberButton = styled.button`
border: none;
    padding: 0;
    color: transparent;
    background-color: transparent;
    cursor: pointer;
    height: 32px;
    :focus {
        outline: none;
    }
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin-top: 16px;
    margin-bottom: ${16/16}rem;
`;

export const RememberPasswordText = styled.p`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 13px;
    line-height: 15px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    text-transform: uppercase;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: center;
`;


export const ForgotPassword = styled.button`
    margin-top: 16px;
    text-decoration: underline 2px ${({ theme: { white } }) => white.colors.WHITE[900]};
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 13px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
`