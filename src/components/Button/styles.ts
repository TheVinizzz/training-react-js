import styled from "styled-components";
import { SButton } from "./interfaces";

export const Button = styled.button<SButton>`
    color: ${props => props.colorButton.font};
    background-color: ${props => props.colorButton.background}
`;