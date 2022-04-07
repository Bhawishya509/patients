import React, { useEffect, useState } from "react";
import bottom_css from "./Bottom.module.css";
import Leftmenu from "./LeftMenu/Leftmenu";
import Right from "./Right/Right";
import { BsPerson, BsChevronRight } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiFillPlusCircle,
  AiFillPrinter,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiCalendarEdit } from "react-icons/bi";
import Middle from "./Middle/Middle";
const Bottom = () => {
  const [input, update] = useState();
  const change = () => {
    update(input);
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className={bottom_css.header}>
        <div className={bottom_css.main}>
          <div className={bottom_css.menu_baar}>
            <Leftmenu />

            <div className={bottom_css.name_search}>
              <div className={bottom_css.profile_block}>
                <div className={bottom_css.profile_logo_name}>
                  <div className={bottom_css.profile_photo_logo}>
                    <BsPerson />
                  </div>
                  <div className={bottom_css.profile_photo_name}>
                    {"Bhawishya"}
                  </div>
                </div>
                <div className={bottom_css.searchblock}>
                  <div className={bottom_css._search_block}>
                    <div className={bottom_css._search_logo}>
                      <AiOutlineSearch />
                    </div>
                    <input
                      className={bottom_css._search_box}
                      value={input}
                      placeholder="Search"
                    />
                  </div>
                  <div className={bottom_css.plus}>
                    <AiFillPlusCircle />
                  </div>
                  <div className={bottom_css.notification}>
                    <IoMdNotificationsOutline />
                  </div>
                </div>
              </div>
              <div className={bottom_css.patient_block}>
                <div className={bottom_css.patient_list}>
                  <div className={bottom_css.name1}>{"patient List"}</div>
                  <div className={bottom_css.greater}>
                    <BsChevronRight />
                  </div>
                  <div className={bottom_css.pname}>{"Bhawishya"}</div>
                </div>
                <div className={bottom_css.edit_patient_list}>
                  <div className={bottom_css.lolly2}>
                    <div className={bottom_css.printer}>
                      <AiFillPrinter />
                    </div>
                  </div>
                  <div className={bottom_css.edit_block}>
                    <div className={bottom_css.edit}>
                      <BiCalendarEdit />
                    </div>

                    <div className={bottom_css.editword}>{"Edit Patient"}</div>
                  </div>
                </div>
              </div>
              <div className={bottom_css.full_details}>
                <Middle />
              </div>
            </div>
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
