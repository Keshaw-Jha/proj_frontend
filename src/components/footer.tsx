import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBar position="static" className="!bg-teal-500 h-20">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Your Footer Content
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
