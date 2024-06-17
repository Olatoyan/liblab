import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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
        <Heading
          as="h1"
          className="text-[#c5cfd9] text-[5rem] leading-[1] font-extrabold tracking-[-0.03rem] laptop:text-[3rem]"
        >
          Your API deserves a{" "}
          <span className={styles.text__gradient}>better SDK.</span>
        </Heading>
        <p className="hero__subtitle">
          Instantly generate SDKs in multiple languages for your API service.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href=""
            className="py-[0.75rem] px-[1.25rem] text-[1.5rem] text-white leading-[1] bg-[#0052cc] rounded-full font-semibold tracking-[-0.01rem] transition-colors ease-[cubic-bezier(0.165,0.84,0.44,1)] duration-200"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <HomepageHeader />
      <main className="bg-[#0d1117]">
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
