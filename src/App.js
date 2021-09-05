import AppBarLendingFront from "./components/AppBar";
import React from "react";
import LoanForm from "./components/LoanForm";

import { useStylesApp } from "../src/styles/Styles";

export default function App() {
  const classes = useStylesApp();
  return (
    <div className={classes.app}>
      <AppBarLendingFront />
      <LoanForm />
    </div>
  );
}
