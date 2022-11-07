import styled from "styled-components";

export const FeedbackButton = styled.button`
display: flex;
padding: 10px;
border: none;
border-radius: 5px;
outline: none;
transition: transform 250ms ease-in-out;
:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`