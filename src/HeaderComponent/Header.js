import React from "react";
import headercss from "./Header.module.css";
let name = "Bagus Fikri";
const Header = () => {
  return (
    <>
      <div className={headercss.mainheader}>
        <div className={headercss.mainheader_inside}>
          <div className={headercss.mainheader_photo_text}>
            <div className={headercss.text_block}>
              <div className={headercss.text1}>{"dribbble"}</div>
              <div className={headercss.text2block}>
                <div className={headercss.text2}>
                  {"Zendenta - Patient detail"}
                </div>
                <div className={headercss.text3}>
                  {"by "}
                  <span style={{ color: "#EA4CA8" }}>{name}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={headercss.photo_block}>
            <div className={headercss.photo} />
          </div>
        </div>
        <div className={headercss.under_line} />
      </div>
    </>
  );
};

export default Header;
