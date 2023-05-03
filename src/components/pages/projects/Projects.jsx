import { Element } from "react-scroll";
import Portfolio from "../../custom/portfolio/Portfolio";
import { Box } from "@mui/material";
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <Box sx={{backgroundColor: "#151515"}} className={styles.projectsContainer}>
      <Element name="projects">
        <Portfolio />
      </Element>
    </Box>
  );
};

export default Projects;
