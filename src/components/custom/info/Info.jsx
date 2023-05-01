import { Box, IconButton, Typography } from "@mui/material";

const Info = () => {
  return (
    <Box>
      <Box>
        <Typography variant="body1">adamkeyes</Typography>
        <Box>
          <IconButton>
           <img src="src/assets/images/icon-github.svg" alt="github" />
          </IconButton>
          <IconButton>
            <img src="src/assets/images/icon-frontend-mentor.svg" alt="fontend mentor" />
          </IconButton>
          <IconButton>
          <img src="src/assets/images/icon-linkedin.svg" alt="linkedin" />
          </IconButton>
          <IconButton>
          <img src="src/assets/images/icon-twitter.svg" alt="twitter" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
