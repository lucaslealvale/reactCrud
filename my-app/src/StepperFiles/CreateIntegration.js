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

const products = [
  {
    value: "product1",
    label: "produto 1",
  },
  {
    value: "product2",
    label: "produto 2",
  },
  {
    value: "product3",
    label: "produto 3",
  },
  {
    value: "product4",
    label: "produto 4",
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
      <TextField
        required
        id="outlined-required"
        label="Nome da integração"
        multiline
        maxRows={4}
      />
      <TextField
        size="large"
        required
        id="outlined-required"
        label="Descrição"
        multiline
        rows={4}
      />
      <TextField
        required
        id="outlined-required"
        label="Registradora"
        multiline
        maxRows={4}
      />
      <TextField
        required
        id="outlined-required"
        label="Produto"
        multiline
        maxRows={4}
      />
      <SelectTextFields />
    </Box>
  </CardContent>
);

export default function SelectTextFields() {
  const [product, setproduct] = React.useState("product1");

  const handleChange = (event) => {
    setproduct(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-product"
          select
          label="Select"
          value={product}
          onChange={handleChange}
          helperText="Please select your product"
        >
          {products.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
