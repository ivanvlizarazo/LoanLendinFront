import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

export default useStyles;
