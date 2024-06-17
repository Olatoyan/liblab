function GetStarted() {
  return (
    <section className="container pt-36 mobile:pt-20">
      <div>
        <p className="pb-4 text-white">GET STARTED</p>
      </div>

      <div className=" grid grid-cols-[auto_1fr] gap-9">
        <img
          src="img/fingerprint.svg"
          className="flex w-[2.75em] h-[2.75em] flex-col items-center justify-center border-[3px] border-[#818cf8] rounded-[9999px] bg-[#4338ca] bg-[radial-gradient(circle_farthest-side_at_-50%_50%,_#4f46e5,_#4338ca)] shadow-[inset_0_0_5px_0_#3730a3,_0_8px_24px_-8px_#818cf8] text-[#c7d2fe] text-[1.25rem] text-center p-2"
        />

        <div>
          <p className="text-[#c5cfd9] text-[3rem] leading-[1.1] font-bold tracking-[-0.02rem] max-w-[600px] desktop:max-w-fit tablet:text-[1.8rem]">
            A true language native{" "}
            <span className="get-started-indigo-text">SDK</span>.
          </p>

          <p className="max-w-[600px] text-[1.25rem] leading-[1.5] tracking-[-0.02em] tablet:[1rem] text-white">
            Each programming language has different patterns. Your SDKs now have
            best practices built in.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
