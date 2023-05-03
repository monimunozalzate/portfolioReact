import { Box } from "@mui/material";
import Info from "../../custom/info/Info";
import Languages from "../../custom/languages/Languages";
import styles from './About.module.css';

const About = () => {
  return (
    <Box sx={{backgroundColor: "#151515"}} className={styles.aboutContainer} id='about'>
       <img
        src="src/assets/images/pattern-rings.svg"
        alt="rings"
        className={styles.rings}
      />
      <Info />
      <Languages />
      <img src="src/assets/images/pattern-rings.svg" alt="rings" className={styles.bottomRing} />
    </Box>
  );
};

export default About;
