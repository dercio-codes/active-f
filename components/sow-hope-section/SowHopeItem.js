import Box from "@mui/material/Box";

export default function SowHopeItem({ img }) {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        height: "50%",
        width: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
