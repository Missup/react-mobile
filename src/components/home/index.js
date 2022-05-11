import React from "react";
import "./home.scss";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Home页面</div>
      <div className="desc">
        这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字
      </div>
      <Button color="primary" onClick={() => navigate("/home/news")}>
        Primary
      </Button>
    </div>
  );
};

export default HomeView;
