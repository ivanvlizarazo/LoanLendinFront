import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LoanNotification from "./LoanNotification";
import Typing from "react-typing-animation";

import { makeStyles } from "@material-ui/core/styles";

const useStylesLoanForm = makeStyles((theme) => ({
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

require("dotenv").config();

export default function LoanForm() {
  const classes = useStylesLoanForm();
  const [data, setData] = useState({
    taxId: "",
    businessName: "",
    requestedAmount: "",
  });
  const [error, setError] = useState({
    taxId: false,
    businessName: false,
    requestedAmount: false,
  });
  const [response, setResponse] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setData({
      taxId: "",
      businessName: "",
      requestedAmount: "",
    });
  };

  function handleChange(value, name) {
    const copyError = { ...error };
    var haveErrors = false;
    setData({ ...data, [name]: value });

    for (const err in copyError) {
      if (copyError[err] === true) {
        haveErrors = true;
        break;
      }
    }
    if (haveErrors) {
      setError({
        taxId: false,
        businessName: false,
        requestedAmount: false,
      });
    }
  }
  function handleChangeNumber(value, name) {
    const copyError = { ...error };
    var haveErrors = false;

    if (value <= 0) {
      setData({ ...data, [name]: Math.abs(value) });
    } else {
      setData({ ...data, [name]: value });
    }

    for (const err in copyError) {
      if (copyError[err] === true) {
        haveErrors = true;
        break;
      }
    }
    if (haveErrors) {
      setError({
        taxId: false,
        businessName: false,
        requestedAmount: false,
      });
    }
  }

  function isEmpty(input) {
    if (
      input === "" ||
      input.toString().trim().length === 0 ||
      input === null ||
      input === undefined ||
      (Array.isArray(input) && input.length === 0)
    ) {
      return true;
    }
    return false;
  }

  function validateFields() {
    var haveErrors = false;
    var copyError = { ...error };
    for (const value in data) {
      if (isEmpty(data[value])) {
        haveErrors = true;
        copyError[value] = true;
      }
    }
    setError(copyError);
    return haveErrors;
  }

  const handleSubmit = async () => {
    var haveErrors = validateFields();
    if (!haveErrors) {
      await fetch(`${process.env.REACT_APP_HOST}/requested_amount`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestedAmount: data.requestedAmount }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          setOpen(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Typing speed={10} hideCursor>
          <Typography variant="h3" className={classes.typography}>
            Apply for your <span className={classes.spanTypography}>loan</span>
          </Typography>
        </Typing>

        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={error.taxId}
                helperText={error.taxId && "This field can't be empty"}
                name="taxId"
                type="number"
                variant="filled"
                required
                fullWidth
                id="taxId"
                label="Tax id"
                autoFocus
                value={data.taxId}
                inputprops={{ inputProps: { min: 0 } }}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                className={classes.textField}
                onChange={(e) =>
                  handleChangeNumber(parseInt(e.target.value), "taxId")
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={error.businessName}
                helperText={error.businessName && "This field can't be empty"}
                variant="filled"
                required
                fullWidth
                id="name"
                label="Business Name"
                name="name"
                value={data.businessName}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                className={classes.textField}
                onChange={(e) => handleChange(e.target.value, "businessName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={error.requestedAmount}
                helperText={
                  error.requestedAmount && "This field can't be empty"
                }
                variant="filled"
                type="number"
                required
                fullWidth
                id="amount"
                label="Requested Amount"
                name="amount"
                inputprops={{
                  inputProps: {
                    min: 0,
                  },
                }}
                value={data.requestedAmount}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                className={classes.textField}
                onChange={(e) =>
                  handleChangeNumber(
                    parseInt(e.target.value),
                    "requestedAmount"
                  )
                }
              />
            </Grid>

            <Button
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={() => handleSubmit()}
            >
              Get loan
            </Button>
          </Grid>
          <LoanNotification
            open={open}
            handleClose={handleClose}
            message={response && response.value}
          />
        </form>
      </div>
    </Container>
  );
}
