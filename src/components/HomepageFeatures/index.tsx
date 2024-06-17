import "./styles.css";

export default function HomepageFeatures() {
  return (
    <section className="bg-[#151b22] py-32 px-0 relative">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full gap-6">
            <span className="h-[1px] w-full bg-[#ffffff86]"></span>
            <p className="uppercase m-0 text-[0.625rem] font-semibold tracking-[0.2rem]">
              Let your api shine
            </p>
            <span className="h-[1px] w-full bg-[#ffffff86]"></span>
          </div>
          <p className="max-w-[717px] text-[#c5cfd9] text-[4rem] leading-[1.2] font-bold text-center pt-4 laptop:text-[2rem]">
            Offer your customers SDKs in their own preferred language
          </p>
          <p className="offer-sec-text text-[1.25rem] leading-[1.5] tracking-[-0.02rem] max-w-[444px] text-center pt-5 tablet:pt-0">
            liblab auto generates SDKs in all main languages, so developers can
            easily adopt your APIs in any stack they use.
          </p>
        </div>
      </div>

      <img
        src="img/typescript.webp"
        alt="TypeScript"
        className="absolute w-[70px] desktop:w-[40px] tablet:w-[25px] top-[32%] left-[10%] desktop:left-[5%] tablet:top-[58%]"
      />
      <img
        src="img/go.webp"
        alt="go"
        className="absolute w-[70px] desktop:w-[40px] tablet:w-[25px] top-[3%] left-[40%]"
      />

      <img
        src="img/php.webp"
        alt="php"
        className="absolute w-[70px] desktop:w-[40px] tablet:w-[25px] top-[3%] left-[60%]"
      />

      <img
        src="img/python.webp"
        alt="python"
        className="absolute w-[70px] desktop:w-[40px] tablet:w-[25px] top-[46%] right-[20%] desktop:right-[10%]"
      />

      <img
        src="img/java.webp"
        alt="java"
        className="absolute w-[70px] desktop:w-[40px] tablet:w-[25px] bottom-[20%] left-[20%]"
      />

      <img
        src="img/swift.webp"
        alt="swift"
        className="absolute w-[70px] desktop:w-[40px] tablet:w-[25px] bottom-[28%] right-[2%]"
      />

      <img
        src="img/terra.webp"
        alt="terra"
        className="absolute w-[70px] desktop:w-[40px] tablet:w-[25px] bottom-[5%} left-[40%]"
      />
    </section>
  );
}
