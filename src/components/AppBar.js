import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "50%",
    height: "auto",
  },
  imageXS: {
    width: "55%",
    height: "auto",
  },
  imageSM: {
    width: "25%",
    height: "auto",
  },
  grow: {
    flexGrow: 2,
  },
  logo: {
    width: "30%",
  },
  logoXS: {
    width: "100%",
  },
  logoSM: {
    width: "100%",
  },
  logoMD: {
    width: "30%",
  },
  appBar: {
    background: "#fff",
  },
}));

export default function AppBarLendingFront(props) {
  const classes = useStyles();
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
