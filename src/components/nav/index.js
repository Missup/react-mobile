import React from "react";
import { MENU } from "./memu";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      {MENU.map((item) => {
        return <span>{item.title}</span>;
      })}
    </div>
  );
};

export default Nav;
