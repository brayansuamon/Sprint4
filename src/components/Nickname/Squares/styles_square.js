import styled, { css } from "styled-components";

//Name of styled component
let Squarecomponent = styled.div`
  //Styles to each Squarecomponent
  width: 50px;
  heigth: 100%;

  //To catch props
  ${({ color }) => {
    //Added CSS color for each case
    return css`
      background-color: ${color};
    `;
  }}
`;
export default Squarecomponent;
