import { Box } from "@mui/material";
import Info from "../../custom/info/Info";
import Languages from "../../custom/languages/Languages";

const About = () => {
  return (
    <Box sx={{backgroundColor:"primary.main"}}>
      <Info />
      <Languages />
    </Box>
  );
};

export default About;
