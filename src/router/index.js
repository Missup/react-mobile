import React from "react";
import BottomNav from "../components/nav";
import { NavBar } from "antd-mobile";
import "./router.scss";
import GetRoutes from "./router";
import { useLocation, useNavigate } from "react-router-dom";

const Router = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  //   判断是否是一级界面
  const isFirstPage = location.pathname.split("/").length === 2;

  return (
    <div className="app">
      {/* 顶部导航一级界面不显示 */}
      {!isFirstPage && (
        <div className="top">
          <NavBar onBack={() => navigate(-1)}>配合路由使用</NavBar>
        </div>
      )}
      <div className="body">{GetRoutes()}</div>
      {/* 底部导航仅一级界面显示 */}
      {isFirstPage && (
        <div className="bottom">
          <BottomNav />
        </div>
      )}
    </div>
  );
};
export default Router;
