import Box from "@mui/material/Box";

export default function SowHopeItem({ img }) {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        width: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
