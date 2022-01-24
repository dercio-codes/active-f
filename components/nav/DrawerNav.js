import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function DrawerNav({ openDrawer, toggleDrawer }) {
  return (
    <div>
      <Drawer anchor={"left"} open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
            <div
            style={{
              width: 180,
              height: "100%",
              backgroundImage:`url("http://www.activefoundation.co.za/img/active%20foundation%20logo2.png")`,
              backgroundSize: "contain",
              opacity: 0.85,
            }}
          />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <GroupsIcon color={"secondary"} />
              </ListItemIcon>
              <ListItemText primary={"WHO WE ARE"} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <WorkspacesIcon color={"secondary"} />
              </ListItemIcon>
              <ListItemText primary={"WHAT WE DO"} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LocalLibraryIcon color={"secondary"} />
              </ListItemIcon>
              <ListItemText primary={"STUDY CENTER"} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <SupervisorAccountIcon color={"secondary"} />
              </ListItemIcon>
              <ListItemText primary={"LEADERSHIP ACADEMY"} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon color={"secondary"} />
              </ListItemIcon>
              <ListItemText primary={"TONS OF LOVE"} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <TrendingUpIcon color={"secondary"} />
              </ListItemIcon>
              <ListItemText primary={"HOW WE DO IT"} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LocalHospitalIcon color={"secondary"} />
              </ListItemIcon>
              <ListItemText color={"secondary"} primary={"WHY WE DO IT"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
