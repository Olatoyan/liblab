import Nav from "@site/src/components/Nav";
import ContactSection from "@site/src/components/ContactSection";
import styles from "./contact.module.css";

function contact() {
  return (
    <section className={styles.contactPage}>
      <Nav />
      <ContactSection />
    </section>
  );
}

export default contact;
