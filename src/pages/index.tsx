import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import GetStarted from "@site/src/components/GetStarted";
import HowItWorks from "@site/src/components/HowItWorks";
import SecuredPage from "@site/src/components/SecuredPage";
import OthersPage from "@site/src/components/OthersPage";
import JoinPage from "@site/src/components/JoinPage";
import Footer from "@site/src/components/Footer";
import Nav from "@site/src/components/Nav";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  console.log(styles);
  const { siteConfig } = useDocusaurusContext();
  console.log(siteConfig);
  return (
    <header className={clsx("hero__container", styles.heroBanner)}>
      <Nav />
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          Your API deserves a{" "}
          <span className={styles.text__gradient}>better SDK.</span>
        </Heading>
        <p className="hero__subtitle">
          Instantly generate SDKs in multiple languages for your API service.
        </p>

        <div className={styles.buttons}>
          <a href="" className={styles.button}>
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <GetStarted />
        <HowItWorks />
        <SecuredPage />
        <OthersPage />
        <JoinPage />
      </main>
      <Footer />
    </>
  );
}
