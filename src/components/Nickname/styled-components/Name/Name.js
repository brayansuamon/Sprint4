import styled, { css } from "styled-components";

let Name = styled.span`
  ${({ color }) => {
    //Added CSS color for each case
    return css`
      background-color: ${color};
    `;
  }}
`;
export default Name;
