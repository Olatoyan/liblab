import "./styles.css";

function index() {
  return (
    <footer className="footer">
      <a href="">© 2024 - liblab INC.</a>

      <ul>
        <h3>FOLLOW</h3>
        {["Discord", "GitHub", "Twitter"].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <h3>PRODUCT</h3>
        {["Documentation", "Pricing", "Blog"].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <h3>COMPANY</h3>
        {["About us", "Careers", "Contact"].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        <h3>LEGAL</h3>
        {["Privacy policy", "Terms of Use"].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </footer>
  );
}

export default index;
