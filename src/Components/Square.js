import React from "react";

const Square = (props) => {
  return (
    <div className="square" onClick={() => props.handleClick(props.index)}>
      {props.value}
    </div>
  );
};

export default Square;
