import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    },
  },
}));

export default function App() {
  {
    /**
    
  
  */
  }
  const classes = useStyles();
  const [data, setData] = useState({
    taxId: null,
    name: "",
    amount: null,
  });
  const [response, setResponse] = useState();

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
      body: JSON.stringify({ amount: data.amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => console.log(err));
  };

  console.log(data);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome to Loan LendingFront
        </Typography>
        <form className={classes.form} noValidate autocomplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="taxId"
                type="number"
                variant="outlined"
                required
                fullWidth
                id="taxId"
                label="Tax id"
                autoFocus
                value={data.taxId}
                InputProps={{ inputProps: { min: 0 } }}
                onChange={(e) =>
                  handleChangeNumber(parseInt(e.target.value), "taxId")
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e.target.value, "name")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="number"
                required
                fullWidth
                id="amount"
                label="Amount"
                name="amount"
                autoComplete="amount"
                InputProps={{ inputProps: { min: 0 } }}
                value={data.amount}
                onChange={(e) =>
                  handleChangeNumber(parseInt(e.target.value), "amount")
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
          {response && <div>{response.amount} </div>}
        </form>
      </div>
    </Container>
  );
}
