import { Typography, TypographyOwnProps } from "@mui/material";

const Copyright = (props: TypographyOwnProps) => {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright ©  "}
      <span color="inherit">Pravesh</span> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
