import React from "react";
import blockcss from "./Block.module.css";
const Block = (props) => {
  return (
    <div className={blockcss.block1}>
      <div className={blockcss.details_class}>{props.gender}</div>
      <div className={blockcss.value_class}>{props.value}</div>
    </div>
  );
};

export default Block;
