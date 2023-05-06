import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Grid container className={styles.formContainer}>
      <Grid item lg={6} className={styles.left}>
        <Typography variant="h1" className={styles.title}>
          Contact
        </Typography>
        <Typography variant="body1" className={styles.paragraph}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </Typography>
      </Grid>
      <Grid item lg={6} className={styles.right}>
        <TextField
          id="standard-basic"
          label="NAME"
          variant="standard"
          className={styles.textField}
        />
        <TextField
          id="standard-basic"
          label="EMAIL"
          variant="standard"
          className={styles.textField}
        />
        <TextField
          id="filled-multiline-static"
          // label="MESSAGE"
          multiline
          rows={4}
          defaultValue="MESSAGE"
          variant="filled"
          className={styles.textArea}
          sx={{padding:'none'}}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button variant="text" className={styles.btn}>
            SEND MESSAGE
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
