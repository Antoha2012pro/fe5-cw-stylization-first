import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: ${({maxWidth}) => maxWidth === "lg"
    ? "1400px"
    : maxWidth === "md"
        ? "1150px"
        : "900px"};
    margin: 0px auto;
`;

export const Button = styled.button`
    background-color: green;
    color: white;
    padding: 20px;
    font-size: ${props => props.textSize === "xl"
        ? "30px"
        : props.textSize === "md"
            ? "20px"
            : "15px"};
`;