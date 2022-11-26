import styled from 'styled-components'
import { Slot } from "@radix-ui/react-slot";

export const FieldArea = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    flex: 1;
`;

export const FieldHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Label = styled.label`
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 13px;
    line-height: 15px;
`;

export const ErrorInput = styled.p`
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 13px;
    line-height: 15px;
    background-color: ${({ theme: { white } }) => white.colors.RED[500]};
    width: fit-content;
    padding: 0px 2px;
`;

export const FieldInputWrapper = styled.div`
    height: 41px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-inline: 16px;
    column-gap: 16px;
    background-color: ${({ theme: { white } }) => white.colors.WHITE[800]};
    :focus-within {
       outline: 2px solid ${({ theme: { white } }) => white.colors.TURQUESE[400]};
    }
`;

export const Input = styled.input` 
    background-color: transparent;
    height: 100%;
    border: none;
    flex: 1;
    padding: 0;
    :focus {
        outline: none;
    };
    ::placeholder {
        color: ${({ theme: { white } }) => white.colors.BLACK};
        font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
        font-family: ${({ theme: { fonts } }) => fonts.family.primary};
        font-size: 1rem;
    }
`;

export const Icon = styled(Slot)` 
    width: ${32/16}rem;
    height: ${32/16}rem;
    font-size: ${25/16}rem;
    color: ${({ theme: { white } }) => white.colors.BLACK};
`;