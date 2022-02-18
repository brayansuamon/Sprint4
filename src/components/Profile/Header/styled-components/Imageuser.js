import styled, { css } from "styled-components";

let Imageuser = styled.img`
  margin: 3% auto;
  border-radius: 50%;

  ${({ color }) => {
    return css`
      border: solid 3px ${color};
    `;
  }}
`;
export default Imageuser;
