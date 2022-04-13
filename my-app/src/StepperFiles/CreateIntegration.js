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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';

export const CreateIntegration = (props) => (
  <CardContent>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
      required
      id="outlined-required"
      label="Descrição"
      multiline
      maxRows={4}
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
    <BasicSelect/>
    </Box>
  </CardContent>
);
export default function BasicSelect() {
    const [register, setRegister] = React.useState('');
  
    const handleChange = (event) => {
      setRegister(event.target.value);
    };
  
    return (
      <Box>
        <FormControl style={{minWidth: 200}}>
          <InputLabel id="outlined-required">Registradora</InputLabel>
          <Select
            required
            id="outlined-required"
            value={register}
            label="Registradora"
            onChange={handleChange}
          >
            <MenuItem value={1}>Registradora 1</MenuItem>
            <MenuItem value={2}>Registradora 2</MenuItem>
            <MenuItem value={3}>Registradora 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
  