import {styled, css} from "styled-components";
import { boolean } from "yup";

export const StyledInput = styled.input<{ $isError: boolean}>`
${(props) =>
    props.$isError &&
    css`
      border-color: #dc2020;
    `}
`

export const AppInputErrorText = styled.span `
  display: block;
  color: #dc2020;
  margin-top: 4px;
  text-align: left;
  margin-bottom: 8px;

`