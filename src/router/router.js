import { useRoutes } from "react-router-dom";
import Search from "../components/search";
import Find from "../components/find";
import User from "../components/user";
import My from "../components/user/my";
import Setting from "../components/user/setting";
import News from "../components/home/news";
import Home from "../components/home";

// 用户中心
const GetUserRoutes = () => {
  const routes = useRoutes([
    {
      path: "",
      children: [
        {
          path: "",
          element: <User />,
        },
        {
          path: "center",
          element: <My />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
      ],
    },
  ]);
  return routes;
};

// 总路由
export default function GetRoutes() {
  const routes = useRoutes([
    {
      path: "/home",
      children: [
        { path: "", element: <Home /> },
        { path: "news", element: <News /> },
      ],
    },
    {
      path: "/todo",
      element: <Search />,
    },
    {
      path: "/message",
      element: <Find />,
    },
    {
      path: "/me/*",
      element: <GetUserRoutes />,
    },
  ]);
  return routes;
}
