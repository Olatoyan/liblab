import "./styles.css";

function index() {
  return (
    <section className="soc container">
      <div className="safe__container">
        <span className="safe__container__span"></span>
        <p>SAFE AND SECURED</p>
        <span className="safe__container__span"></span>
      </div>

      <h2 className="soc-text">
        Get <span className="purple-text">enterprise-grade SDKs</span> which are
        Soc-2 compliant.
      </h2>

      <img src="img/soc.png" className="soc-icon" />
    </section>
  );
}

export default index;
