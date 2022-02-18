import styled, { css } from "styled-components";

let Username = styled.span`
  margin: 0 auto 3rem;
  font-family: "Press Start 2P", cursive;
  padding: 4px 6px;

  ${({ color }) => {
    return css`
      background-color: ${color};
    `;
  }}
`;
export default Username;
