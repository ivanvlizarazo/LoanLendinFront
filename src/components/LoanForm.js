import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LoanNotification from "./LoanNotification";
import Typing from "react-typing-animation";
import useStyles from "../Styles/StylesLoanForm";

require("dotenv").config();

export default function LoanForm() {
  const classes = useStyles();
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
  };

  function handleChange(value, name) {
    setData({ ...data, [name]: value });
    setError({
      taxId: false,
      businessName: false,
      requestedAmount: false,
    });
  }
  function handleChangeNumber(value, name) {
    console.log("value", value);
    if (value <= 0) {
      setData({ ...data, [name]: Math.abs(value) });
    } else {
      setData({ ...data, [name]: value });
    }
    setError({
      taxId: false,
      businessName: false,
      requestedAmount: false,
    });
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

  console.log(data);

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <div>
          <Typing speed={30} hideCursor>
            <Typography variant="h3" className={classes.typography}>
              Apply for your{" "}
              <span className={classes.spanTypography}>loan</span>
            </Typography>
          </Typing>
        </div>
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
                InputProps={{ inputProps: { min: 0 } }}
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
                inputProps={{
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
