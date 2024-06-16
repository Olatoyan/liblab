import "./styles.css";

function index() {
  return (
    <div className="contact-grid">
      <div>
        <h1 className="heading-text">How can we help your SDK needs?</h1>
        <form>
          <div className="name-box">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="text" placeholder="Company" />
          <input type="email" placeholder="Email*" />
          <textarea rows={1} placeholder="Message" />
          <button className="form-btn">Submit</button>
        </form>
      </div>

      <div className="founder">
        <h2>“ We write code that writes code ”</h2>
        <img src="img/sagiv.webp" />
        <p>
          Sagiv Ofek, founder and CEO
          <span>liblab</span>
        </p>
      </div>
    </div>
  );
}

export default index;
