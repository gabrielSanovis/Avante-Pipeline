import styled, {css} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${80 / 16}rem 0rem ${56 / 16}rem 0rem;
    width: 100vw;
    text-align: center;
`;

export const RegistrationText = styled.h3`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.medium};
    font-size: 24px;
    line-height: 28px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    margin-bottom: ${70/16}rem;
    text-transform: uppercase;
`;

export const Form = styled.form`
    width: 90%;
    display: flex;
    row-gap: ${32/16}rem;
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

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
    max-width: 500px;
    margin-top: ${24/16}rem;
`;