import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";

const registers = [
 
  {
    value: "registers1",
    label: "registradora 1",
  },
  {
    value: "registers2",
    label: "registradora 2",
  },
  {
    value: "registers3",
    label: "registradora 3",
  },
  {
    value: "registers4",
    label: "registradora 4",
  },
];
const cryptos = [
 
  {
    value: "crypto1",
    label: "Crypto 1",
  },
  {
    value: "crypto2",
    label: "Crypto 2",
  },
  {
    value: "crypto3",
    label: "Crypto 3",
  },
  {
    value: "crypto4",
    label: "Crypto 4",
  },
];
const workers = [
 
  {
    value: "worker1",
    label: "Worker 1",
  },
  {
    value: "registers2",
    label: "Worker 2",
  },
  {
    value: "registers3",
    label: "Worker 3",
  },
  {
    value: "registers4",
    label: "Worker 4",
  },
];


export const CreateIntegration = (props) => (
  <CardContent>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <SelectTextFields />
      <SelectTextFieldsWorker />
      <SelectTextFieldsCrypto />
    </Box>
  </CardContent>
);

export  function SelectTextFields() {
  const [register, setRegister] = React.useState();

  const handleChange = (event) => {
    setRegister(event.target.value);
  };

  return (
    <TextField
      id="outlined-select-register"
      select
      required
      label="Registradoras"
      value={register}
      onChange={handleChange}
      helperText="Please select your register"
    >
      {registers.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export  function SelectTextFieldsCrypto() {
  const [crypto, setCrypto] = React.useState();

  const handleChange = (event) => {
    setCrypto(event.target.value);
  };

  return (
    <TextField
      id="outlined-select-Crypto"
      select
      required 
      label="Cryptos"
      value={crypto}
      onChange={handleChange}
      helperText="Please select your Crypto"
    >
      {cryptos.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export  function SelectTextFieldsWorker() {
  const [worker, setWorker] = React.useState();

  const handleChange = (event) => {
    setWorker(event.target.value);
  };

  return (
    <TextField
      id="outlined-select-worker"
      select
      required 
      label="Workers"
      value={worker}
      onChange={handleChange}
      helperText="Please select your worker"
    >
      {workers.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}