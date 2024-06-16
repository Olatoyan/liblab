import { useState } from "react";
import "./styles.css";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isTablet = useMediaQuery("(max-width: 1000px)");

  return (
    <nav className="nav">
      <a href="/">
        <img src="img/liblab-logo.svg" />
      </a>
      {(!isTablet || isNavOpen) && (
        <ul>
          <li>
            <a href="/docs/welcome">Docs</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="">Discord</a>
          </li>
        </ul>
      )}

      <button onClick={() => setIsNavOpen(!isNavOpen)}>
        <img
          src={isNavOpen ? "img/close.svg" : "img/open.svg"}
          className="open-btn"
        />
      </button>
    </nav>
  );
}

export default Nav;
