import React from "react";
import middlecss from "./Middle.module.css";
import Block from "./Block.js";
import Footer from "./Fotter.js";

const Middle = (props) => {
  let b =
    "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg";
  const col = {
    backgroundImage: `url(${b})`,
  };

  return (
    <>
      <div className={middlecss.photoname}>
        <div className={middlecss.raper_block1}>
          <div className={middlecss.block1}>
            <div style={col} className={middlecss.photo} />
            <div className={middlecss.name}>{"Bhawishya"}</div>
            <div className={middlecss.email}>{"xyz@gmail.com"}</div>
            <div className={middlecss.post_upcomeing}>
              <div className={middlecss.post}>
                {"2"}

                <span
                  style={{ fontSize: "0.7rem", color: "rgb(169, 175, 179)" }}
                >
                  {"past"}
                </span>
              </div>
              <div className={middlecss.upcomeing}>
                {"15"}

                <span
                  style={{ fontSize: "0.7rem", color: "rgb(169, 175, 179)" }}
                >
                  {"upcomeing"}
                </span>
              </div>
            </div>
            <div className={middlecss.inputbox}>
              <div className={middlecss.text}>{"send message"}</div>
            </div>
          </div>
          <div className={middlecss.block2}>
            <Block gender={"gender"} value={"Female"} />
            <Block gender={"Birthday"} value={"feb 24th,1997"} />
            <Block gender={"Phone number"} value={"(239) 555-0108"} />
            <div className={middlecss.line} />
            <Block gender={"Street Address"} value={"new area"} />
            <Block gender={"city"} value={"bhopal"} />
            <Block gender={"Zip Code"} value={"6555849"} />
            <div className={middlecss.line} />
            <Block gender={"Member Status"} value={"Active meber"} />
            <Block gender={"Registed Date"} value={"Feb 24th 1997"} />
          </div>
        </div>
        <div className={middlecss.footer_block}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Middle;
