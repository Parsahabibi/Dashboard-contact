import { Grid } from "@mui/material";
import React from "react";
import HomeHeader from "../component/Home/HomeHeader";
import TableContact from "../component/Home/TableContact";

const Home = () => {
  return (
    <Grid>
      <HomeHeader />
      <TableContact/>
    </Grid>
  );
};

export default Home;
