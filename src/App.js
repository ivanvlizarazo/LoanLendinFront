import AppBarLendingFront from "./components/AppBar";
import React from "react";
import LoanForm from "./components/LoanForm";
import { makeStyles } from "@material-ui/core/styles";

const useStylesApp = makeStyles((theme) => ({
  app: {
    background:
      "linear-gradient(141deg,rgba(7,36,72,.8) 23%,rgba(242,56,15,.802959) 100%)",
    height: "100vh",
  },
}));

export default function App() {
  const classes = useStylesApp();
  return (
    <div className={classes.app}>
      <AppBarLendingFront />
      <LoanForm />
    </div>
  );
}
