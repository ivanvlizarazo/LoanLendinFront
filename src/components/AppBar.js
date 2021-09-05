import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStylesAppBar } from "../styles/Styles";

export default function AppBarLendingFront(props) {
  const classes = useStylesAppBar();
  const XS = useMediaQuery("(max-width:600px)");
  const SM = useMediaQuery("(max-width:960px)");

  return (
    <div className={classes.grow}>
      <AppBar elevation={3} className={classes.appBar}>
        <Toolbar>
          <div
            className={XS ? classes.logoXS : SM ? classes.logoSM : classes.logo}
          >
            <img
              className={
                XS ? classes.imageXS : SM ? classes.imageSM : classes.image
              }
              src={"color_logo.svg"}
              alt="logo LendingFront"
            ></img>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
