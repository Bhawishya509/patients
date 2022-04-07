import React from "react";
import leftcss from "./LeftMenu.module.css";
import { GoNote } from "react-icons/go";
import { IoIosEgg, IoIosMenu } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import Icontext from "./Icontext";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillPersonFill, BsBagPlus } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
//

let names = [
  "Overview",
  "Calender",
  "Patient List",
  "Messages",
  "Paytment information",
  "Setting",
];

let icons = [
  <AiOutlineQuestionCircle />,
  <GoNote />,
  <BsFillPersonFill />,
  <BiMessageDetail />,
  <BsBagPlus />,
  <IoIosMenu />,
];

//   className={leftcss.}
const Leftmenu = () => {
  return (
    <>
      <div className={leftcss.menu}>
        <div className={leftcss.head_icon_text}>
          <div className={leftcss.icon}>
            <IoIosEgg />
          </div>
          <div className={leftcss.text1}>
            <div className={leftcss.text2}>{"Zendenta"}</div>
            <div className={leftcss.text3}>{"Cabut gigi tanpa sakit"}</div>
          </div>
        </div>
        <div className={leftcss.Icon_text1}>
          <Icontext logo={icons[0]} name={names[0]} />
          <Icontext logo={icons[1]} name={names[1]} />
          <Icontext logo={icons[2]} name={names[2]} />
          <Icontext logo={icons[3]} name={names[3]} />
          <Icontext logo={icons[4]} name={names[4]} />
          <Icontext logo={icons[5]} name={names[5]} />
        </div>
        <div className={leftcss.helpblock}>
          <div className={leftcss.helpicon}>
            <AiOutlineQuestionCircle />
          </div>
          <div className={leftcss.helpname}>{"help ?"}</div>
        </div>

        <div className={leftcss.doctorblock}>
          <div className={leftcss.doctorphoto} />
          <div className={leftcss.doctornameblock}>
            <div className={leftcss.doctorname}>{"saurbhi singh"}</div>
            <div className={leftcss.doctorprofashion}>{"densist"}</div>
          </div>
          <div className={leftcss.doctoricon}>
            <RiArrowDownSLine />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftmenu;
