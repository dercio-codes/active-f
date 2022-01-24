import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SectionHeader from "../SectionHeader";

export default function LeadershipAcademy() {
 


  return (
    <div className="container">
      <SectionHeader txt={"LEADERSHIP ACADEMY"} />
      <Box sx={{
        fontSize:18,
        lineHeight:'1.8rem'
      }}>
        <Grid container columnSpacing={8} justifyContent="center">
          <Grid item xs={12} md={4}>
            <div
              style={{
                height: "100%",
                marginBottom:10,
              }}
            >
              <div
                className="leadership-academy-responsive-image"
                style={{
                  minHeight:'50vh',
                  backgroundSize: "cover",
                  backgroundImage:`url("/images/33.jpeg")`
                }}></div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div
              style={{
                height: "100%",
                marginBottom:10,
              }}
            >
              <div
                className="leadership-academy-responsive-image"
                style={{
                  minHeight:'50vh',
                  backgroundSize: "cover",
                  backgroundImage:`url("/images/8.jpg")`
                }}></div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div
              style={{
                height: "100%",
                marginBottom:10,
              }}
            >
              <div
                className="leadership-academy-responsive-image"
                style={{
                  minHeight:'50vh',
                  backgroundSize: "cover",
                  backgroundImage:`url("/images/10.jpg")`
                }}></div>
            </div>
          </Grid>
        </Grid>

        <p style={{ fontSize: 20, marginBottom: 20, marginTop: 30 }}>
          <span style={{ color: "#cf2d31",fontWeight:600 }}>
            “Everything rises and falls on leadership”
          </span>
          – John C Maxwell
        </p>

        <p style={{ marginBottom: 20, }}>
          Without direction people run amuck. One of the problems we have is
          that there are no leaders and when they do rise, they are not mentored
          and lead others to crime, corruption and even to destruction. We
          realise that building leaders and giving them direction is key to the
          success of any country. At the Leadership Academy we train teachers
          and students to not just rise and lead but to build a team and have a
          dream.
        </p>

        <p style={{ marginBottom: 20, }}>
          We focus on training days to teach and build teams and help them to
          cast vision and then achieve them by mentoring others to keep the
          legacy going. These once-off training sessions look towards potential
          leaders or leaders, even educators, who want to grow themselves. We
          can also assist them to embark on practical training and project
          development if they would like us to do more.
        </p>
      </Box>
    </div>
  );
}
