import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <AppBar position="static" className="!bg-[#FF204E] h-20 pt-2 z-10">
      <Toolbar className="flex items-center justify-center gap-4">
        <img src="assets\pravesh_logo1.2.png" alt="" width={"60px"} />
        <h3
          className="text-6xl font-semibold"
          style={{ fontFamily: "yatra one" }}>
          प्रVEश : entry SYस्टUMM
        </h3>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
