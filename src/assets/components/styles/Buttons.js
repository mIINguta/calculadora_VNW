import styled from "styled-components";
import { Visor } from "./Visor";

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 10%;
    border: none;
    background-color: #424242;
    color: #fff;
    `
    export const ButtonLimpar = styled(Button)`
    width:20%;
    height: 10vh;
    font-size: 1.3rem;
    background-color: red;
    `
    export const ButtonResultado = styled(ButtonLimpar)`
    background-color: green;
    `
    export const ButtonsLR = styled(Visor)`
    height: 10vh;
    gap: 10px;
    border:none;
    margin-bottom: 10px;
    padding: 0px 10px 0 0;
    background-color: transparent;
    `