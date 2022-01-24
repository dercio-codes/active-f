import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SectionHeader from "../SectionHeader";

export default function SowHopeSection() {
  return (
    <div className="container">
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid container columnSpacing={8} justifyContent="center">
          <Grid item xs={12} lg={4}>
            <div className="sow-hope-responsive-grid">
              <div className="sow-hope-responsive-image "
              style={{
                backgroundSize: "cover",
                backgroundImage:`url('/images/4.jpg')`
              }}
              >
                
              </div>

              <div className="sow-hope-responsive-image "
                style={{
                  // width: "100%",
                  // height: "48vh",
                  backgroundSize: "cover",
                  backgroundImage:`url('/images/5.jpg')`
                }}
              
              >
        
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SectionHeader txt={"Sow Hope"} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight:'65vh',
                lineHeight:'1.8rem'
              }}
            >
              <p>
                This project is aimed to, like the name says, sow hope in the
                lives of our community and to expand to the rest of our country.
              </p>

              <p>
                To create food sustainability, you need to grow food that can
                produce enough to feed the masses. Traditional farming
                techniques over many years have grown and fed the masses using
                large farmlands which need massive amounts of water, fertilisers
                and pesticides to grow. But over much study there are now new
                methods being developed and used to grow food cheaper, with less
                water and little to no pentices, making them, what is known as
                organic, healthy crops with little added fake supplements that
                are tasty and good to eat
              </p>

              <br/>

              <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundImage:`url("/icons/sow-hope.png")`,
                  backgroundSize: "cover",
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12} lg={4}>
          <div className="sow-hope-responsive-grid-2">

              <div className="sow-hope-responsive-image sow-hope-responsive-image-2"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition:'center',
                  backgroundRepeat:'no-repeat',
                  backgroundImage:`url('/images/23.jpeg')`
                }}
              
              >
              
              </div>

              <div className="sow-hope-responsive-image sow-hope-responsive-image-2"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition:'center',
                  backgroundRepeat:'no-repeat',
                  backgroundImage:`url('/images/1.jpg')`
                }}

              >
                
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
