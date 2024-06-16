import "./styles.css"


function Nav() {
  return (
    <nav className="nav">
      <img src="img/liblab-logo.svg" />
      <ul>
        <li>
          <a href="/docs">Docs</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Blog</a>
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
