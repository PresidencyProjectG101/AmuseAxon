import React from "react";
import Logo from "../../img/logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} style={{height:"2rem",marginBottom:"12px"}} alt="" />
      <div className="Search">
          <input type="text" placeholder="Search"/>
          {/* <div className="s-icon">
                <UilSearch/>
          </div> */}
      </div>
    </div>
  );
};

export default LogoSearch;
