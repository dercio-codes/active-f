import SecondarySectionHeader from "../SecondarySectionHeader";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function HowWeDoItItem({
  sectionHeading,
  sectionWording,
  image,
}) {
  return (
    <Box
      style={{
        textAlign: "start",
        height: "95%",
        display: "flex",
        flexDirection: "column",
        padding: 8,
      }}
    >
      <SecondarySectionHeader txt={sectionHeading} />
      <div
        style={{
          minHeight: 250,
          width: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <br />
      <Typography
        sx={{
          height: "100%",
        }}
      >
        {sectionWording}
      </Typography>
    </Box>
  );
}
