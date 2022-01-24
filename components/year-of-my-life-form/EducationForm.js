import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const EducationForm = ({form, handleChange}) => {

   // next three
  const [school, setSchool] = React.useState('Name of school');
  const [town, setTown] = React.useState('city / town school is situated in');
  const [finalschooolyear, setFinalSchoolYear] = React.useState('Final school year');
  const [completedgrade, setCompletedGrade] = React.useState('What grade did you last complete');

  // const [form, setForm] = React.useState({
  //   school: "", 
  //   town: "",
  //   finalschooolyear: "",
  //   completedGrade: ""
   
  // });

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // console.log(form);

    return (
        <div>
             <Grid container spacing={3}>
                  {/* next three */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Name of school"
            value={form.school}
            name="school"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="city / town school is situated in"
            value={form.town}
            name="town"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="final school year"
            value={form.finalschooolyear}
            name="finalschooolyear"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <h5>The final year mark of your last completed school year is required and a copy of your report must accompany your application</h5>

        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="outlined-basic"
            label="What grade did you last complete"
            value={form.completedGrade}
            name="completedGrade"
            onChange={handleChange}
            fullWidth 
          />
        </Grid>

             </Grid>
        </div>
    )
}

export default EducationForm
