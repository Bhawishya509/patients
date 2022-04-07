import React from "react";
import rightcs from "./Right.module.css";
import { BsPerson, BsFillFileEarmarkPostFill } from "react-icons/bs";
import List from "./List/List";

const Right = () => {
  return (
    <>
      <div className={rightcs.right_block}>
        <div className={rightcs.right_top}>
          <div className={rightcs.right_notes_see}>
            <div className={rightcs.right_notes}>{"Notes"}</div>
            <div className={rightcs.right_view}>{"See all"}</div>
          </div>
          <div className={rightcs.right_loream_logo}>
            <div className={rightcs.right_loream}>
              <ul className={rightcs.lorem_para}>
                <li> Lorem ipsum dolor sit amet consectetur</li>
                <li> Consequatur corrupti est veniam, labore </li>
                <li> molestias ullam sapiente nostrum, error</li>
              </ul>
            </div>
            <div className={rightcs.right_logo}>{"save notes"}</div>
          </div>
          <div className={rightcs.right_profile_logo}>
            <div className={rightcs.right_profile_logo_top}>
              {"Lorem ipsum dolor sit amet"}
            </div>
            <div className={rightcs.right_profile_logo_down}>
              <div className={rightcs.right_profile_logo_down_first}>
                <div className={rightcs.right_profile_logo_down_first1}>
                  <BsPerson />
                </div>
                <div className={rightcs.right_profile_logo_down_first2}>
                  {"Drg mega Nanode"}
                </div>
              </div>
              <div className={rightcs.right_profile_logo_down_second}>
                {"20 Nov 19"}
              </div>
            </div>
          </div>
        </div>
        <div className={rightcs.right_down}>
          <div className={rightcs.right_down_block}>
            <div className={rightcs.right_down_block1}>{"Files/Document"}</div>
            <div className={rightcs.right_down_block2}>
              <div className={rightcs.right_down_block2_file_logo}>
                <BsFillFileEarmarkPostFill />
              </div>
              <div className={rightcs.right_down_block2_file_edit}>
                {"Add files"}
              </div>
            </div>
          </div>
          <div className={rightcs.speical}>
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
