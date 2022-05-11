import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

export const MENU = [
  {
    key: "/home",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "/todo",
    title: "我的待办",
    icon: <UnorderedListOutline />,
  },
  {
    key: "/message",
    title: "我的消息",
    icon: <MessageOutline />,
  },
  {
    key: "/me",
    title: "个人中心",
    icon: <UserOutline />,
  },
];
