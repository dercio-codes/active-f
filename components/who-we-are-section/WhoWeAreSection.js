import * as React from "react";
import Grid from "@mui/material/Grid";
import SectionHeader from "../SectionHeader";

const WhoWeAreSection = () => {
  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item md={8}>
          <SectionHeader txt={"WHO WE ARE"} />

          <Grid container spacing={2} sx={{ width: "100%", lineHeight: 1.8 }}>
            <Grid item md={6}>
              <p style={{ fontSize: "14px" }}>
                We, as the Active Foundation, are a non- profit organisation
                based in the heart of Johannesburg South and developed to bring
                hope to a nation with so little hope.
              </p>

              <p style={{ fontSize: "14px" }}>
                Before we can tell you who we are you need to know where we come
                from to understand who we are and why we exist. Serving in the
                communities in the South of Johannesburg for over the last 20
                years, we have come to realise among a very diverse nation of
                people with different cultures and circumstances, that to really
                change a nation and to change the culture you need to start by
                changing your block. One person at a time.
              </p>

              <p style={{ fontSize: "14px" }}>
                Over the years we have come to identify a few areas in our
                society where people have been left broken and their lives are
                like the block on which they live, full of weeds, smelling of
                sewerage from broken pipes and houses that are run down and in
                strife.
              </p>

              <p style={{ fontSize: "14px" }}>
                The people in the areas we work, live in the direst
                circumstances. Many homes live with 4-6 complete families in 1
                house all sharing
              </p>
            </Grid>

            <Grid item md={6}>
              <p style={{ fontSize: "14px" }}>
                the same ablution facilities, where one bread winners’ salary
                pay rent and then very little if anything left over to eat with.
                People in our community don’t have much drive or ambition
                because all they see is struggle and broken homes. Education is
                not taken seriously and options to study and places or tools to
                study are not often at hand. This all can change but it starts
                when we change.
              </p>

              <p style={{ fontSize: "14px" }}>
                If as John Maxwell stated, “everything rises and falls on
                leadership”, then leaders are needed but they are few and far
                apart, and the ones that rise, normally, due to bad character,
                lead others to crime or corruption.
              </p>

              <p style={{ fontSize: "14px" }}>
                Who are we? We are one block that is fixing the lives of people
                in our block by building leaders, helping to educate them,
                teaching them to fish instead of waiting for the government to
                catch them a fish to eat. We teach them to fish and feed
                themselves, to be self-sustainable entrepreneurs leading, making
                and creating jobs, as well as teaching them to give back and
                build a future generation of block changers.
              </p>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
        <div
            style={{
              height: "100vh",
              width: "100",
              backgroundImage:`url("/images/14.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
            
        </Grid>
      </Grid>
    </div>
  );
};

export default WhoWeAreSection;
