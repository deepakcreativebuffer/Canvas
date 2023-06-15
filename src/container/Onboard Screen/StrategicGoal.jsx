import React from "react";
import classes from "./StrategicGoal.module.css";
const StrategicGoal = ({
  component,
  handleMouseDown,
  handleTextChange,
  draggingComponentId,
}) => {
  //on double click on the screen the new component and the component will be editable to write and change the text inside the component
  return (
    <>
      <div
        style={{
          position: "absolute",
          transform: `translate(${component.x}px, ${component.y}px)`,
          width: "200px",
          height: "200px",
          background: "#9747FF",
          cursor: "move",
          willChange: "transform",
        }}
        onMouseDown={(e) => handleMouseDown(e, component)}
      >
        <input
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
        />
        {/* <div className={classes.component_text}></div> */}
      </div>
      <div className={classes.component_avatar}></div>
    </>
  );
};

export default StrategicGoal;
