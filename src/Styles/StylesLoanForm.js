import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

export default useStyles;
