import React from "react";
import { Input } from "../../utlis/Import";
import classes from "./GoalInput.module.css";
const GoalInput = () => {
  return (
    <>
      <div className={classes.container}>
        <div>
          <p>Instruction</p>
          <Input />
          <p>
            Write down a Strategic Goal or what kind of Strategy you’re trying
            to achieve...
          </p>
        </div>
      </div>
    </>
  );
};

export default GoalInput;
