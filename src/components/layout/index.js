import React from "react";
import Nav from "../nav";

const Layout = (props) => {
  return (
    <div>
      {props.children}
      <Nav />
    </div>
  );
};

export default Layout;
