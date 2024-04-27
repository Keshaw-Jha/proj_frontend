import { Button, IconButton, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleButtonCLick = () => {
    navigate("/admin");
  };

  return (
    <AppBar position="static" className="!bg-[#FF204E] lg:h-20 lg:pt-2 z-10">
      <Toolbar className="flex items-center justify-center gap-4">
        <img src="assets\pravesh_logo1.2.png" alt="" width={"60px"} />
        <h3
          className="text-3xl md:text-6xl font-semibold"
          style={{ fontFamily: "yatra one" }}>
          प्रVEश SYस्टUM
        </h3>
        <Tooltip title="Admin">
          <Button size="small" onClick={handleButtonCLick}>
            <IconButton className="!bg-orange-500 !text-white hover:shadow-indigo-950 shadow-md">
              <AccessibilityIcon />
            </IconButton>
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
