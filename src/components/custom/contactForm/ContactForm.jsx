import { Grid, Typography, TextField, Button } from "@mui/material";
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <Grid container className={styles.formContainer}>
      <Grid item lg={6}>
        <Typography variant="h1" className={styles.title}>Contact</Typography>
        <Typography variant="body1" className={styles.paragraph}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </Typography>
      </Grid>
      <Grid item lg={6}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
        <Button variant="text">Text</Button>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
