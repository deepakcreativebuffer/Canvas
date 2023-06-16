import React from "react";
import classes from "./StrategicGoal.module.css";
const StrategicGoal = ({
  component,
  handleMouseDown,
  handleTextChange,
  draggingComponentId,
}) => {
  return (
    <>
      <div
        className={classes.component}
        style={{
          transform: `translate(${component.x}px, ${component.y}px)`,
          willChange: "transform",
        }}
        onMouseDown={(e) => handleMouseDown(e, component)}
      >
        {/* <input
          type="text"
          value={component.text}
          onChange={(e) => handleTextChange(e, component)}
          style={{
            width: "80%",
            height: "30%",
            margin: "20%  10% 10% 10%",
            background: "transparent",
            border: "black 1px  solid",
            textAlign: "center",
            color: "black",
            outline: "none",
          }}
          readOnly={draggingComponentId !== null}
        /> */}
        <p className={classes.text}>{component.text}</p>
        {/* <div className={classes.component_text}></div> */}
      </div>
      <div className={classes.component_avatar}></div>
    </>
  );
};

export default StrategicGoal;
