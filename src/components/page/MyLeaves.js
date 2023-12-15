import React from "react";
import SidePanel from "../SidePanel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MyLeaves() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SidePanel />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>My Leaves </h3>

          <button className="button btnn-style"> ALL LEAVES </button>
          <button className="button btnn-style"> PENDING </button>
          <button className="button btnn-style"> HISTORY </button>
        </Box>
      </Box>
    </>
  );
}
