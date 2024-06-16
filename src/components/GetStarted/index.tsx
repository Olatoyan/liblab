import "./style.css";

function index() {
  return (
    <section className="container">
      <div>
        <p>GET STARTED</p>
      </div>

      <div className="fingerprint-container">
        <img src="img/fingerprint.svg" className="fingerprint-icon" />

        <div>
          <p className="get-started-title">
            A true language native <span className="indigo-text">SDK</span>.
          </p>

          <p>
            Each programming language has different patterns. Your SDKs now have
            best practices built in.
          </p>
        </div>
      </div>
    </section>
  );
}

export default index;
