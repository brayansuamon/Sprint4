import React from "react";
import Squarecomponent from "./styles_square";

//Styled components section
let Square = ({ id, value, name, handleColor }) => {
  //Send parameter to Styled component
  return (
    <Squarecomponent
      color={value}
      onClick={() => {
        handleColor(id, value, name);
      }}
    ></Squarecomponent>
  );
};

export default Square;
