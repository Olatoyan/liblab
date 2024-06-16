import "./style.css";

function index() {
  return (
    <section className="container automated">
      <h2>How it works</h2>

      <div className="automated-grid">
        <div className="automated-container">
          <img src="img/code-block.svg" className="code-icon" />

          <div>
            <p className="automated-title">
              Zero touch <span className="green-text">automated SDKs</span>.
            </p>

            <p>
              Take control of your time. Automatically generate everything from
              SDK to documentation pages.
            </p>
          </div>
        </div>
        <div className="automated-small-container ">
          <img src="img/API-specs.webp" />
          <div>
            <h3>Bring your APIs</h3>
            <p>We support common specs like OpenAPI, Swagger.</p>
          </div>
        </div>
        <div className="automated-small-container liblab-magic">
          <img src="img/liblab-magic.gif" />
          <div>
            <h3>liblab magic</h3>
            <p>Generate SDKs and documentation in any language you want.</p>
          </div>
        </div>
        <div className="automated-small-container package-managers">
          <img src="img/package-managers.webp" />
          <div>
            <h3>Deploy</h3>
            <p>
              liblab releases your SDKs to package managers, and builds your
              documentation pages. .
            </p>
          </div>
        </div>
        <div className="automated-small-container monitor">
          <img src="img/monitor.webp" />
          <div>
            <h3>Monitor & Grow</h3>
            <p>
              liblab Dashboard provides you with SDK usage insights and security
              alerts..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
