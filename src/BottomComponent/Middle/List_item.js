import React from "react";
import fottercs from "./Fotter.module.css";
import { MdOutlineEventNote } from "react-icons/md";

const List_item = () => {
  return (
    <>
      <div className={fottercs.footer_note_list}>
        <div className={fottercs.footer_note_list1}>
          <div className={fottercs.footer_note_list1_date}>{"26 Nov'19"}</div>
          <div className={fottercs.footer_note_list1_time}>
            {"9:30 - 10:40"}
          </div>
        </div>
        <div className={fottercs.footer_note_list2}>
          <div className={fottercs.footer_note_list1_time}>{"Treatement"}</div>
          <div className={fottercs.footer_note_list2_date2}>
            {"open Access"}
          </div>
        </div>
        <div className={fottercs.footer_note_list3}>
          <div className={fottercs.footer_note_list1_time}>{"dentist"}</div>
          <div className={fottercs.footer_note_list3_date3}>{"dr.anand"}</div>
        </div>
        <div className={fottercs.footer_note_list4}>
          <div className={fottercs.footer_note_list1_time}>{"nurse"}</div>
          <div className={fottercs.footer_note_list4_date4}>{"Roushni"}</div>
        </div>
        <div className={fottercs.footer_note_list5}>
          <div
            style={{ marginTop: "5px", color: "rgb(40, 136, 221)" }}
            className={fottercs.footer_note_list5_time}
          >
            <MdOutlineEventNote />
          </div>
          <div
            style={{ marginLeft: "3px", color: "rgb(55, 127, 244)" }}
            className={fottercs.footer_note_list5_date}
          >
            {"note"}
          </div>
        </div>
      </div>
    </>
  );
};

export default List_item;
