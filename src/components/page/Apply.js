import React from "react";
import SidePanel from "../SidePanel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Apply() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SidePanel />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Apply</h1>
        </Box>
      </Box>
    </>
  );
}
