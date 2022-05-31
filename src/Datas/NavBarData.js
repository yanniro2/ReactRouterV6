import React from "react";
import * as VscIcons from "react-icons/vsc";
import * as RIIcons from "react-icons/ri";
import * as BIIcons from "react-icons/bi";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    title: "Home",
    path: "/",
    icon: <VscIcons.VscHome className="Icon-style" />,
    class: "home btn",
  },
  {
    title: "About",
    path: "/about",
    icon: <RIIcons.RiNewspaperLine className="Icon-style" />,
    class: "about btn",
  },
  {
    title: "Report",
    path: "/report",
    icon: <VscIcons.VscReport className="Icon-style" />,
    class: "report btn",
  },
  {
    title: "Products",
    path: "/product",
    icon: <RIIcons.RiShoppingCart2Line className="Icon-style" />,
    class: "product btn",
  },
  {
    title: "Team",
    path: "/team",
    icon: <RIIcons.RiTeamFill className="Icon-style" />,
    class: "team btn",
  },
  {
    title: "Messages",
    path: "/message",
    icon: <RIIcons.RiMessage2Line className="Icon-style" />,
    class: "message btn",
  },
  {
    title: "Support",
    path: "/support",
    icon: <BIIcons.BiSupport className="Icon-style" />,
    class: "support btn",
  },
];
