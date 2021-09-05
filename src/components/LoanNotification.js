import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useStyles from "../Styles/StylesLoanNotification";

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
            message === "Approved"
              ? classes.approved
              : message === "Undecided"
              ? classes.undecided
              : classes.declined
          }
          id="alert-dialog-title"
        ></DialogTitle>
        <DialogContent
          className={
            message === "Approved"
              ? classes.approved
              : message === "Undecided"
              ? classes.undecided
              : classes.declined
          }
          id="alert-dialog-description"
        >
          <DialogContentText className={classes.text}>
            {message === "Approved" ? (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <CheckCircleIcon fontSize="large" className={classes.icon} />
                {"  "}
                {`¡Congratulations, your loan was ${message}!`}
              </span>
            ) : message === "Undecided" ? (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <ReportProblemOutlinedIcon
                  fontSize="large"
                  className={classes.icon}
                />
                {"  "}
                {`In this moment your loan is ${message}`}
              </span>
            ) : (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <HighlightOffIcon fontSize="large" className={classes.icon} />
                {"  "}
                {`Your loan was ${message}`}
              </span>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          className={
            message === "Approved"
              ? classes.approved
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
