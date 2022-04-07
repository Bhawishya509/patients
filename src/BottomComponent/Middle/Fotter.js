import React from "react";
import fottercs from "./Fotter.module.css";
import { IoIosArrowUp } from "react-icons/io";
import List_item from "./List_item";

const Fotter = () => {
  return (
    <>
      <div className={fottercs.footer_3_block}>
        <div className={fottercs.upcomeing}>{"Upcomeing Appointments"}</div>
        <div className={fottercs.post}>{"Post Appointments"}</div>
        <div className={fottercs.medical}>{"Medical Records"}</div>
      </div>
      <div className={fottercs.footer_2}>
        <div className={fottercs.footer_root}>
          <div className={fottercs.footer_input}>{"Rest cancel Treatment"}</div>
          <div className={fottercs.footer_logo}>
            <div className={fottercs.logo}>
              <IoIosArrowUp />
            </div>
            <div className={fottercs.name}>{"Show prevoius Treatment"}</div>
          </div>
        </div>
        <div className={fottercs.footer_note_list_cover}>
          <List_item />
          <List_item />
        </div>
      </div>
    </>
  );
};

export default Fotter;
