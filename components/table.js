import { Grid } from "@mui/material";
import OrdersList from "./OrdersList";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <OrdersList />
      </Grid>
    </Grid>
  );
};

export default Tables;
