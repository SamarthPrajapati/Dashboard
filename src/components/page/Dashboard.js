import React from "react";
import SidePanel from "../SidePanel";
import Box from "@mui/material/Box";

export default function Dashboard() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SidePanel />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>Dashboard </h3>

          <button className="button btnn-style btn-curved"> BALANCES </button>
          <button className="button btnn-style2 btn-curved"> PENDING </button>

          <div className="container m-3">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <p>Privileged</p>
                    <p>26.5</p>
                    <p>available</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <p>Casual/Sick</p>
                    <p>3</p>
                    <p>available</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <p>Comp-off</p>
                    <p>0.0</p>
                    <p>available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
