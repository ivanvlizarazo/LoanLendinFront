import { makeStyles } from "@material-ui/core/styles";

export const useStylesLoanForm = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  errorMessage: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    alignContent: "center",
    color: "#ffc100",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#f2380f",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "2rem",
    padding: "1rem",
    "&:hover": {
      background: "#f1280e",
      color: "#072448",
    },
  },

  typography: {
    marginTop: "1em",
    color: "#f2620f",
  },

  spanTypography: {
    color: theme.palette.primary.main,
  },

  textField: {
    background: "#fff",
    borderRadius: "0.4em",
    "& label.Mui-focused": {
      color: "#f2620f",
    },
  },

  floatingLabelFocusStyle: {
    color: "#0724485",
    fontSize: "1em",
  },
}));

export const useStylesLoanNotification = makeStyles((theme) => ({
  approved: {
    background: "#3bc279",
  },
  undecided: {
    background: "#3e85e4",
  },
  declined: {
    background: "#e9594d",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  icon: {
    marginRight: "0.3em",
  },
}));

export const useStylesApp = makeStyles((theme) => ({
  app: {
    background:
      "linear-gradient(141deg,rgba(7,36,72,.8) 23%,rgba(242,56,15,.802959) 100%)",
    height: "100vh",
  },
}));

export const useStylesAppBar = makeStyles((theme) => ({
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
