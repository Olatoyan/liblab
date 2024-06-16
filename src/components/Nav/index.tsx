import "./styles.css";

function Nav() {
  return (
    <nav className="nav">
      <a href="/">
        <img src="img/liblab-logo.svg" />
      </a>
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
    </nav>
  );
}

export default Nav;
