import iconcss from "./Icon_text.module.css";

const Icontext = (props) => {
  return (
    <>
      <div className={iconcss.icon_text_block}>
        <div className={iconcss.icon}>{props.logo}</div>
        <div className={iconcss.name}>{props.name}</div>
      </div>
    </>
  );
};

export default Icontext;
