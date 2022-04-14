import { Box, CardContent } from "@mui/material";

import TextField from "@mui/material/TextField";

import * as React from "react";

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
      <TextField
        required
        id="outlined-required"
        label="Nome da integração"
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
