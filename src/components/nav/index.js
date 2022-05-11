import React from "react";
import { MENU } from "./memu";
import { TabBar } from "antd-mobile";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const setRouteActive = (value) => {
    navigate(value);
  };

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {MENU.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Nav;
