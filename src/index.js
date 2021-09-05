import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// with this configuration the new primary color is provide to the all componets
const theme = createTheme({
  typography: {
    fontFamily: ['"museo-sans"', '"Helvetica"', '"Arial"', '"sans-serif"'].join(
      ","
    ),
  },

  palette: {
    primary: {
      main: "rgba(7, 36, 72, 0.8)",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
