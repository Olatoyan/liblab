import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import "./styles.css";

export default function HomepageFeatures() {
  return (
    <section className="offer-section">
      <div className="container">
        <div className="offer-heading">
          <div className="shine__container">
            <span className="shine__container__span"></span>
            <p>LET YOUR API SHINE</p>
            <span className="shine__container__span"></span>
          </div>
          <p className="offer-text">
            Offer your customers SDKs in their own preferred language
          </p>
          <p className="offer-sec-text">
            liblab auto generates SDKs in all main languages, so developers can
            easily adopt your APIs in any stack they use.
          </p>
        </div>
      </div>

      <img
        src="img/typescript.webp"
        alt="TypeScript"
        className="logo logo-ts"
      />
      <img src="img/go.webp" alt="go" className="logo logo-go" />
      <img src="img/php.webp" alt="php" className="logo logo-php" />
      <img src="img/python.webp" alt="python" className="logo logo-py" />
      <img src="img/java.webp" alt="java" className="logo logo-java" />
      <img src="img/swift.webp" alt="swift" className="logo logo-swift" />
      <img src="img/terra.webp" alt="terra" className="logo logo-terra" />
      <img
        src="img/typescript.webp"
        alt="TypeScript"
        className="logo logo-ts"
      />
    </section>
  );
}
