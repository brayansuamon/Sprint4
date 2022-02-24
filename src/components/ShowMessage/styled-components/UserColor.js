import styled, { css } from "styled-components";

let UserColor = styled.span`
  ${({ color }) => {
    return css`
      background-color: ${color};
    `;
  }}
`;
export default UserColor;
