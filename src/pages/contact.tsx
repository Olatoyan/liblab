import Nav from "@site/src/components/Nav";
import ContactSection from "@site/src/components/ContactSection";
import Footer from "@site/src/components/Footer";
import styles from "./contact.module.css";

function contact() {
  return (
    <section className={styles.contactPage}>
      <Nav />
      <ContactSection />
      <Footer />
    </section>
  );
}

export default contact;
