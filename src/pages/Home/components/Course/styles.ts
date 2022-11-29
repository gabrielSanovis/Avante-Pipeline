import styled from "styled-components";

export const CourseContainer = styled.section`
    text-align: center;
    margin-bottom: 32px;
`;

export const CourseHeader = styled.article`
    padding-inline: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-bottom: 32px;
    justify-content: center;
    max-width: 500px;
    margin-inline: auto;
`;

export const CourseTitle = styled.h4<{green?: boolean}>`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.bold};
    font-size: 24px;
    line-height: 28px;
    color: ${({ theme: { white }, green }) => white.colors[green ? "GREEN" : "WHITE"][900]};
    text-transform: uppercase;
`;

export const CourseDescription = styled.p`
    font-weight: ${({ theme: { fonts } }) => fonts.weight.regular};
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme: { white }}) => white.colors.WHITE[900]};
`;

export const CourseMain = styled.div`
    background-color: ${({ theme: { white }}) => white.colors.WHITE[800]};
    padding: 40px 32px;
    border: 2px solid ${({ theme: { white }}) => white.colors.GREEN[400]};
    border-radius: 10px;   
    display: flex;
    flex-direction: column;
    row-gap: 56px;
`;

export const CourseList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
`;