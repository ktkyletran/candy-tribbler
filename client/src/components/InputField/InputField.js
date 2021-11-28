import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputField = ({ inputProps, half, name, label, type, autoFocus, handleChange, handlePassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12} >
      <TextField
        inputProps={inputProps}
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handlePassword}>
                {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          )
        }: null}
        sx={{background: 'rgba(255,255,255,0.75)', borderRadius: '4px'}}
      />
    </Grid>
  )
}

export default InputField