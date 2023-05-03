import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import styles from "../card/Card.module.css";

const CardComponent = ({ project }) => {
  const [enter, setEnter] = useState(false);
  //   console.log(enter);
  return (
    <>
      {enter ? (
        <Grid
          item
          lg={6}
          sm={12}
          key={project.id}
          className={styles.card}
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <img
            src={project.source}
            alt={project.name}
            className={styles.opacImg}
          />
          <Box className={styles.linksBox}>
            <Typography variant="body1" className={styles.link}>
              VIEW PROJECT
            </Typography>
            <Typography variant="body1" className={styles.link}>
              VIEW CODE
            </Typography>
          </Box>
          <Typography variant="h2" className={styles.name}>
            {project.name}
          </Typography>
          <Typography variant="body1" className={styles.language}>
            {project.languages}
          </Typography>
        </Grid>
      ) : (
        <Grid
          item
          lg={6}
          sm={12}
          key={project.id}
          className={styles.card}
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <img src={project.source} alt={project.name} className={styles.img} />
          <Typography variant="h2" className={styles.name}>
            {project.name}
          </Typography>
          <Typography variant="body1" className={styles.language}>
            {project.languages}
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default CardComponent;
