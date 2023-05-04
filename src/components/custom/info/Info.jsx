import { Box, IconButton, Typography } from "@mui/material";
import styles from "./Info.module.css";
import { Link } from "react-scroll";
import { useWindowSize } from "../../../utils/useWindowSize";

const Info = () => {
  const size = useWindowSize();
 
  return (
    <Box className={styles.infoContainer}>
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
      <Box className={styles.personsinfo}>
        <Box>
          <Typography variant="h1" className={styles.h1}>
            Nice to meet you! I’m <span>Adam Keyes.</span>
          </Typography>
          <Typography variant="body1" className={styles.paragraph}>
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </Typography>
        </Box>
        {size.width > 800 && (
          <img
            src="src/assets/images/image-profile-desktop.webp"
            alt="profile picture"
            className={styles.profilePicture}
          />
        )}
        {size.width > 600 && size.width < 800 && (
          <img
            src="src\assets\images\image-profile-tablet.webp"
            alt="profile picture"
            className={styles.profilePicture}
          />
        )}
        {size.width < 600 && (
          <img
            src="src\assets\images\image-profile-mobile.webp"
            alt="profile picture"
            className={styles.profilePicture}
          />
        )}
        <img
          src="src\assets\images\pattern-circle.svg"
          alt=""
          className={styles.circle}
        />
        <Link smooth={true} delay={500} to="ContactID" className={styles.link}>
          CONTACT ME
        </Link >
      </Box>      
      <hr style={{ border: "1px solid #fff" }} />
    </Box>
  );
};

export default Info;
