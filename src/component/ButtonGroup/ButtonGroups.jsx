import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import classes from "./ButtonGroup.module.css";

const ButtonGroups = () => {
  return (
    <>
      <div className={classes.button_group_container}>
        <ButtonGroup
          variant=" string"
          aria-label="outlined secondary button group"
        >
          <Button
            sx={{
              bgcolor: "#D0D5DD",
              color: "black",
            }}
          >
            Strategy
          </Button>
          <Button
            sx={{
              bgcolor: "#D0D5DD",
              color: "black",
            }}
          >
            Roadmap
          </Button>
          <Button
            sx={{
              bgcolor: "#D0D5DD",
              color: "black",
            }}
          >
            Plan
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ButtonGroups;
