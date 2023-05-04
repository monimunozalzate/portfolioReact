import { Element } from "react-scroll";
import ContactForm from "../../custom/contactForm/ContactForm";
import Navbar from "../../custom/navbar/Navbar";

const Contact = () => {
  return (
    <Element name="ContactID" style={{ backgroundColor: '#151515'}}>
      <ContactForm />
      <Navbar />
    </Element>
  );
};

export default Contact;
