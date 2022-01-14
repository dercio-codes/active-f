import { useState } from "react";
import DrawerNav from "./nav/DrawerNav";
import AppBar from "./nav/AppBar";

const Layout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <div style={{ paddingTop: 65 }}>
      <AppBar toggleDrawer={toggleDrawer} />
      <DrawerNav openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      {children}
    </div>
  );
};

export default Layout;
