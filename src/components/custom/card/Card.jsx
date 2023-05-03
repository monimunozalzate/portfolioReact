import { Grid } from "@mui/material";

import { projects } from "../../../utils/projects";

import CardComponent from "../cardComponent/CardComponent";

const Card = () => {
  
  return (
    <Grid container style={{ gap: "1rem", justifyContent: "space-between" }}>
      {projects.map((project) => {
        return (
          <CardComponent key={project.id} project={project}/>
        );
      })}
    </Grid>
  );
};

export default Card;
