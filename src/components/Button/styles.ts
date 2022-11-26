import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button<{larger?: "sm" | "md" | "lg", variant?: "outline" | "fill"}>`
    text-transform: uppercase;
    cursor: pointer;
    font-weight: ${({ theme: { fonts } }) => fonts.weight.medium};
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme: { white } }) => white.colors.WHITE[900]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 8px;
    width: ${props => props.larger === "lg" ? 337 : props.larger === "md" ? 237 : 137}px;
    height: ${40/16}rem;
    text-align: center;
    ${props => props.variant === "outline" 
        ? css`
            border: 3px solid ${({ theme: { white } }) => white.colors.GREEN[400]};
            background-color: transparent;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            :hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
            :focus {
                background-color: ${({ theme: { white } }) => white.colors.PURPLE[800]};
                border: none;
            }
        ` 
        : css`
            background-color: ${({ theme: { white } }) => white.colors.GREEN[400]};
            :hover {
                background-color: ${({ theme: { white } }) => white.colors.TURQUESE[400]};
            }
            :focus {
                background-color: ${({ theme: { white } }) => white.colors.PURPLE[800]};
            }
        ` 
    }
`;