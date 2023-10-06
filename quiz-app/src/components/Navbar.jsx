//Navbar application component
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dr7 Questions Test
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
