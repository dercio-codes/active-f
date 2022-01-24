import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SectionHeader from "../SectionHeader";
import WhatWeDoItem from "./WhatWeDoItem";
import { THEME_TRANSPARENT_RED } from "../../constants";

const WhatWeDoSection = ()=> {
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Box
              style={{
                minHeight: "100%",
                backgroundImage: "url('/images/Banner 1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div
                style={{
                  minHeight: "90%",
                  width: 250,
                  background: THEME_TRANSPARENT_RED,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "centers",
                  justifyContent: "center",
                  top: -30,
                  left: 30,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <p
                  style={{
                    textAlign: "start",
                  }}
                >
                  We, The Active Foundation, do a lot of work… what you ask? We
                  are happy to mention but a few of the projects that we are
                  doing.
                </p>
                <h3
                  style={{
                    textAlign: "start",
                  }}
                >
                  We have 4 key areas that we focus on: Sow Hope, Study Centre,
                  Leadership Academy, and finally Tons of Love
                </h3>
                <p
                  style={{
                    textAlign: "start",
                  }}
                >
                  In these 4 areas we aim to build leaders, create food
                  sustainability, aid job creation, educate and equip skills to
                  build top quality students and functional work force and
                  finally to feed and help uplift those that are forgotten,
                  downtrodden and suffering economically to give them a better
                  life
                </p>
              </div>
            </Box>
          </Grid>

          <Grid item md={7} xs={12}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              <SectionHeader txt={"What We Do"} />

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Box
                    style={{
                      boxShadow: "none",
                    }}
                  >
                    <WhatWeDoItem
                      img={"./images/1.jpg"}
                      icon={"./icons/sow-hope.png"}
                      projectName="SOW HOPE"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    style={{
                      boxShadow: "none",
                    }}
                  >
                    <WhatWeDoItem
                      img={"./images/13.jpg"}
                      icon={"./icons/study-centre.png"}
                      projectName="STUDY CENTRE"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    style={{
                      boxShadow: "none",
                    }}
                  >
                    <WhatWeDoItem
                      img={"./images/9.jpg"}
                      icon={"./icons/leadership-academy.png"}
                      projectName="LEADERSHIP ACADEMY"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    style={{
                      boxShadow: "none",
                    }}
                  >
                    <WhatWeDoItem
                      img={"./images/19.jpg"}
                      icon={"./icons/tons-of-love.png"}
                      projectName="TONS OF LOVE"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WhatWeDoSection;