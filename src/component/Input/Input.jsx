import React from "react";
import classes from "./Input.module.css";
import { arrow } from "../../utlis/Import";
import { useNavigate } from "react-router-dom";
import useEditorContext from "../../hooks/useEditorContext";

const Input = () => {
  const { setData } = useEditorContext();
  const navigate = useNavigate();
  const strategyhandler = (e) => {
    setData(e.target.value);
  };

  const editorPagehandler = () => {
    navigate("/editor");
  };
  return (
    <>
      <div className={classes.inputSection}>
        <input onChange={strategyhandler} />
        <img src={arrow} alt="arrow" onClick={editorPagehandler} />
      </div>
    </>
  );
};

export default Input;
