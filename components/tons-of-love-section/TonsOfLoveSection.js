import React from "react";
import Grid from "@mui/material/Grid";
import SectionHeader from "../SectionHeader";

const TonsOfLoveSection = () => {
  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item md={8}>
          <SectionHeader txt={"TONS OF LOVE"} />

          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid item md={6}>
              <p style={{ fontSize: "14px", marginBottom: 20 }}>
                Love is always expressed in action. We can’t say we love others
                with our words but then by our actions show them something
                different.
              </p>

              <p style={{ fontSize: "14px", marginBottom: 20 }}>
                In our country, like many around the world, we have people and
                families starving or dying of hunger each day. Food is a
                necessity for the continuation of life. Due to people’s
                backgrounds, circumstances and even their own mindsets, many are
                in need of daily assistance in getting sustenance to live or
                even function properly at school, home or work.
              </p>

              <p style={{ fontSize: "14px", marginBottom: 20 }}>
                <span style={{ fontWeight: "500" }}>Tons of Love</span> is a
                programme aimed to feed, aid and help families and individuals
                by supplying this basic need for life. Our aim is to raise cash,
                purchase and pack food parcels aim order to deliver them to
                those in need. We aim to not just supply a need, but also to
                build a relationship with them and through other campaigns and
                programmes take them out of the mindset of being fed to feeding
                themselves, and finally, themselves feeding others.
              </p>
            </Grid>

            <Grid item md={6}>
              <img
                src={"/images/17.jpg"}
                style={{
                  height: "40vh",
                  width: "70%",
                  objectFit: "cover",
                  objectPosition: "center",
                  marginBottom: 10,
                }}
              />

              <img
                src={"/images/26.jpeg"}
                style={{
                  height: "40vh",
                  width: "70%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4}>
          <img
            src={"/images/18.jpg"}
            style={{
              height: "100vh",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TonsOfLoveSection;
