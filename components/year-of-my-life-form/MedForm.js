import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';


const answer = [
  {
    value: 'Yes',
    
  },
  {
    value: 'No',
    
  },
  
];

export default function MedForm({form, handleChange}) {

  // const [disability, setDisability] = React.useState('Yes');
  // const [allegy, setAllegy] = React.useState('Yes');
  // const [aid, setAid] = React.useState('Yes');
  // const [medicalAidName, setMedicalAidName] = React.useState('Yes');

  // const [form, setForm] = React.useState({
  //   disability: "",
  //   allegy: "",
  //   aid: "",
  //   medicalAidName: "",
  //   medicalAidNumber: ""
  // });


  
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // console.log(form);

  return (
    <React.Fragment>
  
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
          <TextField
          id="outlined-select-currency"
          select
          label="select"
          value={form.disability}
          name="disability"
          onChange={handleChange}
          fullWidth 
          helperText="Do you have a disability"
        >
          {answer.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField
          id="outlined-select-currency"
          select
          label="select"
          value={form.allegy}
          name="allegy"
          onChange={handleChange}
          fullWidth 
          helperText="Do you have an allegy"
        >
          {answer.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField
          id="outlined-select-currency"
          select
          label="select"
          value={form.aid}
          name="aid"
          onChange={handleChange}
          fullWidth 
          helperText="Do you have medical aid"
        >
          {answer.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12} md={12}>
        <h2 style={{background:"lightgray", display:"block", paddingLeft:"7px"}}>Medical Aid Details</h2>
        </Grid>
      
        <Grid item xs={12} md={6}>
        {/* <h2 style={{background:"lightgray", display:"block", paddingLeft:"7px"}}>Medical Aid Details</h2> */}
          <TextField
            required
            id="outlined"
            label="Medical Aid Name:"
            fullWidth
            value={form.medicalAidName}
            name="medicalAidName"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="outlined"
            label="Medical Aid Number"
            fullWidth
            value={form.medicalAidNumber}
            name="medicalAidNumber"
            onChange={handleChange}
          />
        </Grid>
     
      </Grid>
    </React.Fragment>
  );
}