import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppBarNav({ toggleDrawer }) {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar
        position="fixed"
        sx={{ background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,.1)" }}
      >
        <Toolbar>
          <Button
            onClick={toggleDrawer(true)}
            sx={{ mr: 1 }}
            color={"secondary"}
          >
            <MenuIcon />
          </Button>

          <img
            src={
              "http://www.activefoundation.co.za/img/active%20foundation%20logo2.png"
            }
            style={{
              width: 180,
              height: "100%",
              objectFit: "contain",
              opacity: 0.85,
            }}
          />
          <Box
            sx={{
              height: "100%",
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button color={"secondary"}>{"WHAT WE DO"}</Button>

            <Button color={"secondary"}>{"STUDY CENTER"}</Button>

            <Button color={"secondary"}>{"LEADERSHIP ACADEMY"}</Button>

            <Button color={"secondary"}>{"TONS OF LOVE"}</Button>

            <Button color={"secondary"}>{"HOW WE DO IT"}</Button>

            <Button color={"secondary"}>{"WHY WE DO IT"}</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
