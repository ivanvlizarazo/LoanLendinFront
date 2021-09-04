import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  approbed: {
    background: "#00ff00cc",
  },
  undecided: {
    background: "rgba(7,36,72,.98)",
  },
  declined: {
    background: "#ff0000cc",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
}));

export default function LoanNotification(props) {
  const { open, message } = props;
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          className={
            message === "Approbed"
              ? classes.approbed
              : message === "Undecided"
              ? classes.undecided
              : classes.declined
          }
          id="alert-dialog-title"
        ></DialogTitle>
        <DialogContent
          className={
            message === "Approbed"
              ? classes.approbed
              : message === "Undecided"
              ? classes.undecided
              : classes.declined
          }
          id="alert-dialog-description"
        >
          <DialogContentText className={classes.text}>
            {message === "Approbed"
              ? `¡Congratulations, your loan was ${message}!`
              : message === "Undecided"
              ? `In this moment your loan is ${message}`
              : `Your loan was ${message}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          className={
            message === "Approbed"
              ? classes.approbed
              : message === "Undecided"
              ? classes.undecided
              : classes.declined
          }
        >
          <Button
            className={classes.text}
            onClick={props.handleClose}
            color="primary"
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
