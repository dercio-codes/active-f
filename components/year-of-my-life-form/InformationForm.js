import * as React from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Form from "./Form";

const titles = [
  {
    value: "Mr",
  },
  {
    value: "Mrs",
  },
];

const genders = [
  {
    value: "male",
  },
  {
    value: "female",
  },
];

const activities = [
  {
    value: "Learner currently in grade 12",
  },
  {
    value: "University student",
  },
  {
    value: "Unemployed",
  },
  {
    value: "Other",
  },
];

const members = [
  {
    value: "Mother",
    label: "Male",
  },
  {
    value: "Father",
    label: "Female",
  },
  {
    value: "Both",
    label: "Female",
  },
  {
    value: "None",
    label: "Female",
  },
];

export default function InformationForm({form, handleChange}) {
 
  const {register, errors} = useForm()
 
  return (
    <React.Fragment>                                   
      <Grid  container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-select-currency"
            select
            label="title"
            value={form.title}
            name="title"
            onChange={handleChange}
            fullWidth
            helperText="Please select your gender"
            // {...register('email', { required: true })}
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
            value={form.surname}
            name="surname"
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
            value={form.firstname}
            name="firstName"
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        {/* next three */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Preffered name"
            value={form.prefferedName}
            name="prefferedName"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Email address"
            value={form.email}
            name="email"
            onChange={handleChange}
            fullWidth
            type="email"
            // {...register('email', { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            type="date"
            // label="Date of birth"
            value={form.dob}
            name="dob"
            onChange={handleChange}
            helperText="Date of birth"
            fullWidth
          />
        </Grid>

        {/* next three */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Identity number"
            value={form.id}
            name="id"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Permanent postal address"
            value={form.address}
            name="address"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="City / suburb"
            value={form.city}
            name="city"
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        {/* next three */}
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Postal code"
            value={form.code}
            name="code"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Cell phone number"
            value={form.phonenumber}
            name="phoneNumber"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-basic"
            label="Telephone number"
            value={form.telephonenumber}
            name="telephoneNumber"
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        {/* next three */}
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={form.gender}
            name="gender"
            onChange={handleChange}
            fullWidth
            helperText="Please select your gender"
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={form.activity}
            name="activity"
            onChange={handleChange}
            fullWidth
            helperText="What is your current main activity"
          >
            {activities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={form.member}
            name="member"
            onChange={handleChange}
            fullWidth
            helperText="Are your parents members of the church ?"
          >
            {members.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <h2
          style={{
            background: "lightgray",
            display: "block",
            paddingLeft: "7px",
          }}
        >
          DEPARTMENTS
        </h2>
        <p>
          You may only select one department to recieve your training in. Please
          mark clearly your department of choice
        </p>
      </Grid>

      <Grid item xs={12} sm={12}>
        <h5 style={{ margin: "2px" }}>Graphic Design</h5>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              name="graphicDesign"
              id="graphicDesign"
              type='checkbox'
              onChange={handleChange}
              value={form.graphicDesign}
              checked={form.graphicDesign}
            />
          }
          label="Graphic Design"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h5 style={{ margin: "2px" }}>Filming Arts</h5>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              color="secondary"
              name="filmArts"
              value={form.filmArts}
              type='checkbox'
              checked={form.filmArts}
            />
          }
          label="Filming Arts"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h5 style={{ margin: "2px" }}>Studio and sound engineering</h5>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              color="secondary"
              name="soundEngineering"
              value={form.soundEngineering}
              type='checkbox'
              checked={form.soundEngineering}
            />
          }
          label="Studio and sound engineering"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h5 style={{ margin: "2px" }}>Administration</h5>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              color="secondary"
              name="administration"
              value={form.administration}
              type='checkbox'
              checked={form.administration}
            />
          }
          label="Administration"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h5 style={{ margin: "2px" }}>Finance</h5>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              color="secondary"
              name="finance"
              value={form.finance}
              type='checkbox'
              checked={form.finance}
            />
          }
          label="Finance"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <h5 style={{ margin: "2px" }}>Information Technology</h5>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              color="secondary"
              name="informationTechnology"
              value={form.informationTechnology}
              type='checkbox'
              checked={form.informationTechnology}
            />
          }
          label="Information Technology"
        />
      </Grid>
    </React.Fragment>
  );
}
