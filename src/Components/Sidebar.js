import { ContactMail, Dashboard, Info } from "@mui/icons-material"; // Icons from MUI
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const router = useRouter();

  return (
    <div
      className={`bg-black text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"
        } h-screen fixed left-0 top-0 z-50`} // Ensure fixed positioning on the left
    >
      {/* Sidebar content */}
      <List>
        <ListItem>
          <Button onClick={() => router.push('/dashboard')}>
            <ListItemIcon>
              <Dashboard sx={{ color: "white" }} />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Dashboard" />}
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <ListItemIcon>
              <Info sx={{ color: "white" }} />
            </ListItemIcon>
            {isOpen && <ListItemText primary="About" />}
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <ListItemIcon>
              <ContactMail sx={{ color: "white" }} />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Contact" />}
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
