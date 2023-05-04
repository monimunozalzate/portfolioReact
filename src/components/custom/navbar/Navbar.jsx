import styles from "../info/Info.module.css";
import { Box, IconButton, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box className={styles.navbar}>
      <Typography variant="body1" color={"#FFFFFF"} className={styles.name}>
        adamkeyes
      </Typography>
      <Box className={styles.iconsBox}>
        <IconButton>
          <img src="src/assets/images/icon-github.svg" alt="github" />
        </IconButton>
        <IconButton>
          <img
            src="src/assets/images/icon-frontend-mentor.svg"
            alt="fontend mentor"
          />
        </IconButton>
        <IconButton>
          <img src="src/assets/images/icon-linkedin.svg" alt="linkedin" />
        </IconButton>
        <IconButton>
          <img src="src/assets/images/icon-twitter.svg" alt="twitter" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
