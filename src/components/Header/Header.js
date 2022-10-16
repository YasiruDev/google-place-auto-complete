import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Box, Typography, AppBar, Grid, Paper } from "@mui/material";
import { APP_NAME } from "../../config";
import { withStyles } from "@mui/styles";
import styles from "./styles";

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Box className={classes.appbar}>
          <Typography variant="h5"> {APP_NAME}</Typography>
        </Box>
      </>
    );
  }
}
export default withRouter(withStyles(styles, { withTheme: true })(Header));
