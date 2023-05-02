import { Box } from "@mui/material";
import Info from "../../custom/info/Info";
import Languages from "../../custom/languages/Languages";
import styles from './About.module.css';

const About = () => {
  return (
    <Box sx={{backgroundColor: "#151515"}} className={styles.aboutContainer} id='about'>
      <Info />
      <Languages />
    </Box>
  );
};

export default About;
