import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SectionHeader from "../SectionHeader";

export default function StudyCentre() {
  return (
    <div className="container">
      <Box
        sx={{
          padding: 1,
          minHeight: "100vh",
          lineHeight: 1.7,
          position: "relative",
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 8, sm: 12, md: 8 }}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        >


          <Grid item xs={12} md={6} lg={4}>
            <SectionHeader txt="Study Centre" />   
            <Typography variant="p">
              Education is important. You don’t know what you don’t know, until
              you know it.
              <br />
              <br />
              There are a lot of scholars around the country that are failing
              due to many circumstances. As the study centre innovative we are
              getting those that have gone ahead to give back by tutoring extra
              math, pure math, math lit and introducing more subjects online for
              free to help those from grades 10-12 to get the desired marks and
              even to help those that are failing to now pass or even get a
              distinction.
              <br />
              <br />
              <b>
                No COVID worries and no transport to travel. Online classes
                taught by university students and past pupils to help our
                schools go further.
              </b>
              <div
                style={{
                  height: 120,
                  width: 120,
                  backgroundImage: "url('./icons/study-centre.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  position: "absolute",
                  bottom: 0,
                }}
              ></div>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
          <SectionHeader txt="Study Centre" hidden = {true} />   
            <Typography variant="p">
              Many people’s lives have been impacted over the last 5 years
              through the Active Foundation and many testimonies of people that
              once had no goals, no ambitions, no recourses and no
              opportunities, now have success stories all as a result of our
              programmes and initiatives.
              <br />
              <br />
              Once a year, we work alongside IT companies called Orange One
              Consulting and Rapidtrade, and together with their expertise and
              funding, we source candidates from various schools that are
              finishing their matric and offer them a 5 week IT crash course
              with the potential of an internship and possible job after
              completion of the course and the internship
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box
              style={{
                minHeight: "100vh",
                backgroundImage: "url('/images/22.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
