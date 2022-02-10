import React from "react";
import Squarecomponent from "./styles_square";

//Styled components section
let Square = ({ id, value, name }) => {
  //Send parameter to Styled component
  return <Squarecomponent color={value}></Squarecomponent>;
};

export default Square;
