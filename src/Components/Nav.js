import React from "react";

import "./Navbar.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import NavBarData from "../Datas/NavBarData";
import * as AIIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";
function Nav() {
  const [start, setTo] = React.useState(false);

  const changeTrutoFalse = () => setTo(!start);

  const NavItems = NavBarData.map((data) => {
    return (
      <div className={data.class}>
        {data.icon}
        <Link to={data.path} className="Link">
          <span>{data.title}</span>
        </Link>
      </div>
    );
  });

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="Nav">
        <VscIcons.VscMenu className="Navbar" onClick={changeTrutoFalse} />
      </div>
      <div className={start ? "sidebar" : "sidebar display"}>
        <div className="close " onClick={changeTrutoFalse}>
          <AIIcons.AiOutlineClose className="Icon-close" />
        </div>
        {NavItems}
      </div>
    </IconContext.Provider>
  );
}

export default Nav;
