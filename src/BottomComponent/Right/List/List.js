import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import rightcs from "../Right.module.css";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
const List = () => {
  return (
    <>
      <div className={rightcs.last_block1}>
        <div className={rightcs.last_block2}>
          <div className={rightcs.last_block2_logo}>
            <BsFillFileEarmarkPostFill />
          </div>

          <div className={rightcs.last_block2_name}>
            {"Check up Result.pdf"}
          </div>
        </div>

        <div className={rightcs.last_block3}>
          <div className={rightcs.last_block4}>
            <AiOutlineDelete />
          </div>
          <div className={rightcs.last_block5}>{"121kb"}</div>
        </div>
      </div>
    </>
  );
};

export default List;
