import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleButtonCLick = () => {
    navigate("/admin");
  };

  return (
    <AppBar position="static" className="!bg-[#FF204E] h-20 pt-2 z-10">
      <Toolbar className="flex items-center justify-center gap-4">
        <img src="assets\pravesh_logo1.2.png" alt="" width={"60px"} />
        <h3
          className="text-6xl font-semibold"
          style={{ fontFamily: "yatra one" }}>
          प्रVEश SYस्टUM
        </h3>
        <Button
          color={"warning"}
          className="!bg-orange-500 !text-white "
          onClick={handleButtonCLick}>
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
