function OthersPage() {
  return (
    <section className="container">
      <div className="seen flex flex-col items-center pt-40 w-full tablet:pt-20">
        <div className=" grid grid-cols-[1fr_auto_1fr] items-center w-full gap-6">
          <span className="h-[1px] w-full bg-[#ffffff86]"></span>
          <p className="m-0 text-[0.625rem] font-semibold tracking-[0.2rem] uppercase text-[#ffffff86]">
            See what others say
          </p>
          <span className="h-[1px] w-full bg-[#ffffff86]"></span>
        </div>

        <h2 className=" text-[3em] leading-[1] font-extrabold max-w-[700px] tracking-[-0.03rem] text-center pt-10 tablet:text-[1.8rem] pb-10 text-[#c5cfd9]">
          As seen <span className="others-purple-text">on</span>
        </h2>

        <img src="img/TechCrunch.jpg" className="seen-icon" />

        <p className="max-w-[300px] pt-10 tablet:text-[1rem] text-[1.25rem] text-white">
          liblab provides SDK development tools that integrate with an API for
          authentication, error handling, security and more. The platform
          generates a documentation page and developer portal, ostensibly
          ensuring that the API, SDK and documentation remain in sync.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-12 desktop:grid-cols-1">
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

      <div className=" mt-8 flex justify-center">
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
    <div className="p-6 rounded-[8px] bg-[#151b22] gap-7 flex flex-col items-start">
      <img src="img/quotes.svg" className="quotes" />

      <p className="text-white">{text}</p>

      <div className=" flex gap-4 items-center mt-auto">
        <img src={img} className=" rounded-[50%] w-[64px] h-[64px]" />
        <div className="">
          <p className=" font-semibold text-[#c5cfd9]">{name}</p>
          <p className="text-[#ffffff86]">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default OthersPage;
