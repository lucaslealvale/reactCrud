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

export const Product = (props) => (
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
    </Box>
  </CardContent>
);

export default function SelectTextFields() {
  const [product, setproduct] = React.useState();

  const handleChange = (event) => {
    setproduct(event.target.value);
  };

  return (
    <TextField
      id="outlined-select-product"
      select
      label="Escolha um produto"
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
  );
}
