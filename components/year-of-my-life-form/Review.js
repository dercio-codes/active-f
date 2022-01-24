import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const titles = [
  {
    value: 'Mr',
    
  },
  {
    value: 'Mrs',
    
  },
  
];


const relationship = [
  {
    value: 'Father',
    
  },
  {
    value: 'Mother',
    
  },
  {
    value: 'Brother',
    
  },
  {
    value: 'Sister',
    
  },
  {
    value: 'Guardian',
    
  },
  {
    value: 'Cousin',
    
  },
  {
    value: 'Grandfather',
    
  },
  {
    value: 'Parent in law',
    
  },
  {
    value: 'Uncle',
    
  },
  {
    value: 'Aunt',
    
  },
  {
    value: 'Stepfather',
  
  },
  {
    value: 'Stepmother',
    
  },
  {
    value: 'Other',
    
  },
  
];

export default function Review({form, handleChange}) {

  // const [title, setTitle] = React.useState('Mr');


  return (
    <Grid container spacing={3}>
         <Grid item xs={12} sm={4}>
        <TextField
          id="outlined-select-currency"
          select
          label="title"
          value={form.EmergencyTitle}
          name="EmergencyTitle"
          onChange={handleChange}
          fullWidth 
          required
          helperText="Please select your gender"
        >
          {titles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Surname"
            value={form.EmergencySurname}
            name="EmergencySurname"
            required
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="firstname"
            value={form.EmergencyFirstName}
            name="EmergencyFirstName"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>

         {/* next three */}
         <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Residence"
            value={form.emergencyResidence}
            name="emergencyResidence"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="city / surburb"
            value={form.emergencyCity}
            name="emergencyCity"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            // type="date"
            label="Postal code"
            value={form.emergencyPostalCode}
            name="emergencyPostalCode"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>

          {/* next three */}
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Cell Phone Number:"
            value={form.emergencyCell}
            name="emergencyCell"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Home number"
            value={form.emergencyHomeNumber}
            name="emergencyHomeNumber"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Contact during office hours"
            value={form.emergencyOfficeContact}
            name="emergencyOfficeContact"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <TextField
          id="outlined-select-currency"
          select
          label="Relationship"
          value={form.emergencyRelationship}
          name="emergencyRelationship"
          onChange={handleChange}
          fullWidth 
          required
          helperText="Relationship"
        >
          {relationship.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </Grid>


    </Grid>
    
  );
}