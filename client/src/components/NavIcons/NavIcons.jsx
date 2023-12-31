import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Setti from "../../img/setti.png"
import Comment from "../../img/comment.png";
// import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      {/* <UilSetting /> */}

      <Link to="../chatting">
      <img src={Setti} alt="" />
      </Link>

      <Link to="../workouts">
        <img src={Noti} alt="" />
      </Link>

      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
