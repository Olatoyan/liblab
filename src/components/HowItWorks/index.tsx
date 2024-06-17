import "./style.css";

function index() {
  return (
    <section className="container pt-40 mobile:pt-20">
      <h2 className="px-40 desktop:px-16 tablet:px-0 uppercase text-[1.3rem] pb-8 font-bold tracking-[-0.01rem]">
        How it works
      </h2>

      <div className="grid grid-cols-2 gap-32 pt-0 pb-40 px-40 desktop:px-16 laptop:gap-8 tablet:grid-cols-1 tablet:px-0 tablet:pb-16">
        <div className="grid grid-cols-[auto_1fr] gap-9 laptop:col-span-full">
          <img
            src="img/code-block.svg"
            className=" flex w-[2.75em] h-[2.75em] flex-col items-center justify-center border-[3px] rounded-full border-[#2dd4bf] bg-[#0f766e] bg-[radial-gradient(circle_farthest-side_at_-50%_50%,#0d9488,#0f766e)] shadow-[inset_0_0_5px_0_#115e59,0_8px_24px_-8px_#2dd4bf] text-[1.25rem] text-center p-2"
          />

          <div>
            <p className="text-[#c5cfd9] text-[3rem] leading-[1.1] font-bold tracking-[-0.02rem] max-w-[395px] tablet:text-[1.8rem]">
              Zero touch <span className="green-text">automated SDKs</span>.
            </p>

            <p className="max-w-[600px] text-[1.25rem] leading-[1.5] tracking-[-0.02rem] tablet:text-[1rem]">
              Take control of your time. Automatically generate everything from
              SDK to documentation pages.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-[auto_1fr] gap-3 laptop:grid-cols-1">
          <img
            src="img/API-specs.webp"
            alt="specs"
            className="laptop:w-[237px] laptop:h-[100px] laptop:object-contain"
          />
          <div className="max-w-[150px] laptop:w-auto">
            <h3 className="text-[1.2rem] font-semibold pb-3">
              Bring your APIs
            </h3>
            <p>We support common specs like OpenAPI, Swagger.</p>
          </div>
        </div>
        <div className=" grid grid-cols-[auto_1fr] gap-3 laptop:grid-cols-1">
          <img
            src="img/liblab-magic.gif"
            alt="liblab-magic"
            className="w-[237px] h-[100px] object-cover"
          />
          <div className="max-w-[150px] laptop:w-auto">
            <h3 className="text-[1.2rem] font-semibold pb-3">liblab magic</h3>
            <p>Generate SDKs and documentation in any language you want.</p>
          </div>
        </div>
        <div className=" grid grid-cols-[auto_1fr] gap-3 laptop:grid-cols-1">
          <img
            src="img/package-managers.webp"
            alt="package managers"
            className="w-[237px] h-[100px] object-contain"
          />
          <div className="max-w-[150px] laptop:w-auto">
            <h3 className="text-[1.2rem] font-semibold pb-3">Deploy</h3>
            <p>
              liblab releases your SDKs to package managers, and builds your
              documentation pages. .
            </p>
          </div>
        </div>
        <div className="col-span-full justify-self-center grid grid-cols-[auto_1fr] gap-3 laptop:grid-cols-1">
          <img
            src="img/monitor.webp"
            alt="monitor"
            className="w-[237px] h-[100px] object-contain "
          />
          <div className="max-w-[150px] laptop:w-auto">
            <h3 className="text-[1.2rem] font-semibold pb-3">Monitor & Grow</h3>
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
