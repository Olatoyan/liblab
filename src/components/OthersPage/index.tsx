import "./styles.css";

function index() {
  return (
    <section className="container">
      <div className="seen">
        <div className="safe__container">
          <span className="safe__container__span"></span>
          <p>SEE WHAT OTHERS SAY</p>
          <span className="safe__container__span"></span>
        </div>

        <h2 className="seen-text">
          As seen <span className="purple-text">on</span>
        </h2>

        <img src="img/TechCrunch.jpg" className="seen-icon" />

        <p className="seen-sec-text">
          liblab provides SDK development tools that integrate with an API for
          authentication, error handling, security and more. The platform
          generates a documentation page and developer portal, ostensibly
          ensuring that the API, SDK and documentation remain in sync.
        </p>
      </div>

      <div className="users">
        <UserQuotes
          text="liblab was what we needed after trying a few SDK generators. Aside from generating an SDK being easy, the code quality and customization options were outstanding."
          name="Hamza Essahely"
          position="Core Team Developer, CrowdSec"
          img="img/Hamza.jpeg"
        />
        <UserQuotes
          text="Creating good SDKs is time-consuming and complex. With liblab, you have something working as soon as you start experimenting with the SDK generator. As a developer, I found creating SDKs with it to be very fast and very satisfying."
          name="Rachid Flih"
          position="Co-Founder & CEO, Panora"
          img="img/Rachid.jpeg"
        />
        <UserQuotes
          text="liblab's SDKs transformed our API integrations, significantly reducing integration time for our end users and improving our dev team's experience simultaneously."
          name="Ali Zheib"
          position="Senior Software engineer at CELITECH"
          img="img/Ali.jpeg"
        />
      </div>

      <div className="top-post">
        <a href="">
          <img src="img/top-post-badge.svg" />
        </a>
      </div>
    </section>
  );
}

function UserQuotes({
  text,
  name,
  position,
  img,
}: {
  text: string;
  name: string;
  position: string;
  img: string;
}) {
  return (
    <div className="user">
      <img src="img/quotes.svg" className="quotes" />

      <p>{text}</p>

      <div className="user-container">
        <img src={img} className="user-img" />
        <div className="user-info">
          <p className="user-name">{name}</p>
          <p className="user-position">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default index;
