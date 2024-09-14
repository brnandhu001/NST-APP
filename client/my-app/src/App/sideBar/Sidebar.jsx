import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Logo from "../../assets/react.svg"

const drawerWidth = 340;

const Sidebar = () => {
  // Navigation data
  const navData = [
    { name: 'Dashboard', route: '/' },
    { name: 'Profile', route: '/profile' },
    { name: 'Settings', route: '/settings' },
  ];

  return (
    <Drawer
      variant="permanent" // You can also use "temporary" for collapsible behavior
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >

<Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
        }}
      >
        {/* Use the img tag to correctly load the image */}
        <img src={Logo} alt="logo" width={100} />
      </Box>
      <List>
        {navData?.map((item) => (
          // Don't forget the `return` inside the map function
          <ListItem button key={item.name}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
