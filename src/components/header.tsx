import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <AppBar position="static" className="!bg-[#FF204E] h-20 pt-2">
      <Toolbar className="flex items-center justify-center gap-4">
        <img src="public\assets\pravesh_logo1.2.png" alt="" width={"60px"} />
        <h3
          className="text-4xl font-semibold"
          // style={{ fontFamily: "'Pixelify Sans', sans-serif" }}
        >
          PRAVESH
        </h3>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
