import { useState } from "react";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isTablet = useMediaQuery("(max-width: 1000px)");

  return (
    <nav className="nav flex items-center justify-center px-16 pb-16 desktop:pl-8 desktop:justify-between mobile:px-8 mobile:pb-8">
      <a href="/" className="z-[1] px-5">
        <img src="img/liblab-logo.svg" />
      </a>
      {(!isTablet || isNavOpen) && (
        <ul className="flex gap-6 desktop:flex-col desktop:bg-[#20262d] items-start justify-around desktop:absolute desktop:top-0 desktop:px-8 desktop:left-0 desktop:w-full z-[0] desktop:pt-24">
          <li>
            <a
              href="/docs/welcome"
              className="z-[1] px-5 text-[14px] font-medium tracking-[0.03em] text-[#c5cfd9]"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="/"
              className="z-[1] px-5 text-[14px] font-medium tracking-[0.03em] text-[#c5cfd9]"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/"
              className="z-[1] px-5 text-[14px] font-medium tracking-[0.03em] text-[#c5cfd9]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="z-[1] px-5 text-[14px] font-medium tracking-[0.03em] text-[#c5cfd9]"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="z-[1] px-5 text-[14px] font-medium tracking-[0.03em] text-[#c5cfd9]"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="z-[1] px-5 text-[14px] font-medium tracking-[0.03em] text-[#c5cfd9]"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href=""
              className="z-[1] px-5 text-[14px] font-medium tracking-[0.03em] text-[#c5cfd9]"
            >
              Discord
            </a>
          </li>
        </ul>
      )}

      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="z-[5] hidden desktop:block"
      >
        <img
          src={isNavOpen ? "img/close.svg" : "img/open.svg"}
          className="open-btn"
        />
      </button>
    </nav>
  );
}

export default Nav;
