import { Box } from "@mui/material";
import Info from "../../components/custom/info/Info";
import Languages from "../../components/custom/languages/Languages";

const About = () => {
  return (
    <Box sx={{backgroundColor:"primary.main"}}>
      <Info />
      <Languages />
    </Box>
  );
};

export default About;
