import React from "react";
import classes from "./Nav.module.css";
import { Button } from "../../utlis/Import";
import {
  avatar,
  comment,
  logo,
  menu,
  notification,
  angledown,
} from "../../utlis/Import";

const Navbar = () => {
  return (
    <>
      <div className={classes.container_nav}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
          <img src={menu} alt="menu" />
        </div>
        {/* <div className="text"> */}
        <div className={classes.projectTitle}>
          <p>Untitled Project</p>
          <img src={angledown} alt="angledown" />
        </div>
        {/* </div> */}
        <div className={classes.avtar}>
          <img src={comment} alt="comment" />
          <img src={notification} alt="notification" />
          <Button>Share </Button>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
