import AccountCircle from "@mui/icons-material/AccountCircle"; // Profile icon
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { signOut } from "next-auth/react";


export default function Header({ toggleSidebar, isSidebarOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    signOut()
  };

  return (
    <AppBar
      position="static"
      className={`bg-blue-800 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"
        }`}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" className="flex-1">
          My Application
        </Typography>
        <div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
