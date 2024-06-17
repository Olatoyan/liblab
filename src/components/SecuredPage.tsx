function SecuredPage() {
  return (
    <section className="soc container flex flex-col items-center">
      <div className=" grid grid-cols-[1fr_auto_1fr] items-center w-full gap-6">
        <span className="h-[1px] w-full bg-[#ffffff86]"></span>
        <p className="m-0 text-[0.625rem] font-semibold tracking-[0.2rem] uppercase">
          Safe and secured
        </p>
        <span className="h-[1px] w-full bg-[#ffffff86]"></span>
      </div>

      <h2 className="text-[3rem] text-[#c5cfd9] leading-[1] font-extrabold tracking-[-0.03rem] max-w-[700px] pt-10 laptop:text-[2rem] text-center pb-10">
        Get <span className="secured-purple-text">enterprise-grade SDKs</span> which are
        Soc-2 compliant.
      </h2>

      <img src="img/soc.png" className="soc-icon" />
    </section>
  );
}

export default SecuredPage;
