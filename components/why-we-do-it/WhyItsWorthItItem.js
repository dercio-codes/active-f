import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function WhyItsWorthItItem({ number, text }) {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={12} md={6} lg={12}>
          <Box
            sx={{
              minHeight: 100,
              height: 100,
              width: "100%",
              display: "flex",
            }}
          >
            <Button
              sx={{
                width: "40%",
                height: "100%",
                background: "#231f20",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 900,
              }}
            >
                {number}
            </Button>

            <Box
              sx={{
                width: "60%",
                height: "100%",
                background: "transparent",
                display: "flex",
                padding: 2,
                alignItems: "center",
                fontSize: 12,
                fontWeight: 900,
              }}
            >
                {text}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
