import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SectionHeader from "../SectionHeader";
import HowWeDoItItem from "./HowWeDoItItem";
import DonateForm from "../donate-form/DonateForm"
import OnlineApplicationForm from "../online-application-form/OnlineApplicationForm";

export default function RowAndColumnSpacing() {
  return (
    <div className="container">
      <Box sx={{ width: "100%", position: "relative", marginBottom:5 }}>
      
        <SectionHeader txt="How We Do it" />

        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 8, sm: 8, md: 8, lg: 8 }}
        >
          <Grid item xs={12} md={8} lg={4}>
            <HowWeDoItItem
              image={"/images/jobless.jpeg"}
              sectionHeading={
                "IDENTIFY AND NOMINATE PROJECTS AND CANDIDATES THAT ARE IN NEED"
              }
              sectionWording={
                "Working within the community, we come across those with needs and help where we can assist. A foundation application form can be filled out to apply for a food parcel or to join the inniatives in the study centre. We also source schools and organisations that would like to build leadership, and offer a joint venture in the building of an aquaponics culture to grow vegetable crops"
              }
            />
            <div
              style={{
                padding: 8,
              }}
            >
              {/* <Button variant="contained">ONLINE APPLICATION</Button> */}
              <OnlineApplicationForm />
            </div>
          </Grid>
          <br />

          <Grid item xs={12} md={8} lg={4}>
            <HowWeDoItItem
              image={"/images/joel-muniz-A4Ax1ApccfA-unsplash.jpg"}
              sectionHeading={
                "PARTNER WITH PEOPLE, ORGANISATIONS AND VOLUNTEERS"
              }
              sectionWording={
                "Once we find a candidate for one of our projects, we embark on getting full or part-time volunteers through initiatives like “Year Of My Life” where those who want to get involve, either learn skills or aid in helping these projects to be successful. Anyone can volunteer a year of their life to work with us to achieve this."
              }
            />
            <div
              style={{
                padding: 8,
              }}
            >
              <Button variant="contained">YEAR OF MY LIFE</Button>
            </div>
          </Grid>
          <br />
          <Grid item xs={12} md={8} lg={4}>
            <HowWeDoItItem
              image={"/images/markus-winkler-wLBVAF-kMR0-unsplash.jpg"}
              sectionHeading={
                "SOURCE DONATIONS AND FUNDERS TO ACHIEVE OUR GOALS"
              }
              sectionWording={
                "The final step in the process is to calculate the cost of the project and materials needed. After careful budgeting, planning and duration of the project is evaluated, we contact willing sponsors to fund the project and help us to get it off the ground without financial obstacles."
              }
            />
            <div
              style={{
                padding: 8,
              }}
            >
              <DonateForm />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
