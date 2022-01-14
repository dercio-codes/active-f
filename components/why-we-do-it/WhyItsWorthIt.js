import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SectionHeader from "../SectionHeader";
import { Typography } from "@mui/material";
import WhyItsWorthItItem from "./WhyItsWorthItItem";
import { THEME_TRANSPARENT_RED } from "../../constants";
import VideoPlayer from "../video-player/VideoPlayer";
import { useState } from "react";

export default function WhyItsWorthIt() {

  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={5}
            sm={12}
            style={{ position: "relative", minHeight: "100vh" }}
          >
            <Box
              style={{
                minHeight: "100%",
                backgroundImage: "url('/images/kid-ride.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  minHeight: "90vh",
                  minWidth: 250,
                  width: "60%",
                  background: THEME_TRANSPARENT_RED,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "centers",
                  justifyContent: "space-around",
                  top: -50,
                  left: 30,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <Typography
                  variant={"h5"}
                  sx={{
                    fontWeight: 900,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  TESTIMONIES
                </Typography>
                <div
                  style={{
                    width: "100%",
                    height: 150,
                  }}
                >
                  <VideoPlayer
                    videoImage={"/images/Tevin.jpeg"}
                    index={0}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 150,
                  }}
                >
                  <VideoPlayer
                    videoImage={"/images/Kenny.jpeg"}
                    index={1}
                  />
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item md={7} sm={12}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              <div
                style={{
                  marginBottom: 32,
                }}
              >
                <SectionHeader txt={"Why It`s Worth It "} />
              </div>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Typography variant="p">
                    We do it for the community!
                    <br />
                    <br />
                    <br />
                    We do it for different faces, names and places in different
                    circumstances, situations and occupations. Our aim is to
                    impact the community at large.
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="p">
                    Many people’s lives have been impacted over the last 5 years
                    through the Active Foundation and many testimonies of people
                    that once had no goals, no ambitions, no recourses and no
                    opportunities, now have success stories all as a result of
                    our programmes and initiatives.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    marginTop: 4,
                    marginBottom: 4,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                    }}
                  >
                    We believe that one block can change a nation!
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <WhyItsWorthItItem number={"338"} text={"Families Fed"} />
                </Grid>
                <Grid item xs={6}>
                  <WhyItsWorthItItem
                    number={"19"}
                    text={
                      "Year of My Life interns who acquired skills, jobs, and aided in achieving something"
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <WhyItsWorthItItem
                    number={"338"}
                    text={"Christmas gifts parcels given out"}
                  />
                </Grid>
                <Grid item xs={6}>
                  <WhyItsWorthItItem number={"25"} text={"Students Trained"} />
                </Grid>

                <Grid item xs={6}>
                  <WhyItsWorthItItem number={"3"} text={"Aquaponics Built"} />
                </Grid>
                <Grid item xs={6}>
                  <WhyItsWorthItItem number={"4"} text={"Schools Impacted"} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
