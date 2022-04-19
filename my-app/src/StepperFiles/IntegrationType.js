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
    value: "product2",
    label: "API Rest",
  },
  {
    value: "product4",
    label: "Arquivaria",
  },
  {
    value: "product3",
    label: "Mensageria",
  },
];

export const IntegrationType = (props) => (
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
      <TextField
        required
        id="outlined-required"
        label="Nome da Integração"
        multiline
        maxRows={3}
      />
      <TextField
        size="large"
        required
        id="outlined-required"
        label="Descrição"
        multiline
        rows={4}
      />
      
      
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
          required
          select
          label="Tipo de integração"
          value={product}
          onChange={handleChange}
          helperText="Selecione o tipo de integração"
        >
          {products.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
              
            </MenuItem>
          ))}
        </TextField>
   
  );
}