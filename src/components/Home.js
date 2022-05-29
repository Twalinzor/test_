import { Toolbar, AppBar, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <>
      <AppBar position="static" style={{ background: "#6cc3d5ff" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CADT_test
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/designs">
              <Button variant="contained">Designs</Button>
            </Link>
            <Link to="/setouts">
              <Button variant="contained">Setouts</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Home;
