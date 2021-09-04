import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoanNotification from "./LoanNotification";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#f2380f",
    color: "#072448",
    fontWeight: "bold",
    borderRadius: "2rem",
    padding: "1rem",

    "&:hover": {
      background: "#f1280e",
      color: "#fff",
    },
  },
  typography: {
    color: "#f2620f",
    marginTop: theme.spacing(5),
  },
  spanTypography: {
    color: "#072448",
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

export default function LoanForm() {
  const classes = useStyles();
  const [data, setData] = useState({
    taxId: "",
    businessName: "",
    requestedAmount: "",
  });
  const [response, setResponse] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(value, name) {
    setData({ ...data, [name]: value });
  }
  function handleChangeNumber(value, name) {
    if (value <= 0) {
      setData({ ...data, [name]: Math.abs(value) });
    } else {
      setData({ ...data, [name]: value });
    }
  }

  const handleSubmit = async () => {
    await fetch(`/requested_amount`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedAmount: data.requestedAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <Typography className={classes.typography} variant="h3">
            Apply for your <span className={classes.spanTypography}>loan </span>
          </Typography>
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
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
                variant="filled"
                required
                fullWidth
                id="name"
                label="Business Name"
                name="name"
                value={data.bussinesName}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                className={classes.textField}
                onChange={(e) => handleChange(e.target.value, "businessName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                type="number"
                required
                fullWidth
                color="#fff"
                id="amount"
                label="Requested Amount"
                name="amount"
                InputProps={{ inputProps: { min: 0 } }}
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
