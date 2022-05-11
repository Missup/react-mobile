import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "./router/index";

export default function EntryApp() {
  return (
    <Router initialEntries={["/home"]}>
      <RouterView />
    </Router>
  );
}
