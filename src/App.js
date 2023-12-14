// App.js
import React from "react";
import "mdbootstrap/css/bootstrap.css";
import "mdbootstrap/css/mdb.css";
import "./components/style.css";

import SidePanel from "./components/SidePanel";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Apply from "./components/page/Apply.js";
import Dashboard from "./components/page/Dashboard.js";
import MyLeaves from "./components/page/MyLeaves.js";
import { colors } from "@mui/material";

const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-light navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brand text-color">
            Leaves
          </a>
          <a href="/" className="company-name">
            HashedIn
          </a>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/myLeaves" exact element={<MyLeaves />}></Route>
          <Route path="/apply" exact element={<Apply />}></Route>
        </Routes>
      </BrowserRouter>

      <SidePanel />
    </React.Fragment>
  );
};

export default App;
