function ContactSection() {
  return (
    <div className=" grid grid-cols-2 gap-20 px-40 pb-40 desktop:px-8 desktop:pb-20 laptop:grid-cols-1 pt-8">
      <div>
        <h1 className="text-[#c5cfd9] text-[3.5rem] leading-[1] font-bold tracking-[-0.02rem] laptop:text-[2rem] mobile:text-[1.5rem] pb-8">
          How can we help your SDK needs?
        </h1>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="bg-transparent h-[3.5em] py-4 px-[1.125rem] border border-black shadow-[inset_0_0_0_1px_transparent] transition-all text-[#c5cfd9] text-[1rem] leading-[1] rounded-bl-lg rounded-br-lg w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-transparent h-[3.5em] py-4 px-[1.125rem] border border-black shadow-[inset_0_0_0_1px_transparent] transition-all text-[#c5cfd9] text-[1rem] leading-[1] rounded-bl-lg rounded-br-lg w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            className="bg-transparent h-[3.5em] py-4 px-[1.125rem] border border-black shadow-[inset_0_0_0_1px_transparent] transition-all text-[#c5cfd9] text-[1rem] leading-[1] rounded-bl-lg rounded-br-lg w-full"
          />
          <input
            type="email"
            placeholder="Email*"
            className="bg-transparent h-[3.5em] py-4 px-[1.125rem] border border-black shadow-[inset_0_0_0_1px_transparent] transition-all text-[#c5cfd9] text-[1rem] leading-[1] rounded-bl-lg rounded-br-lg w-full"
          />
          <textarea
            rows={1}
            placeholder="Message"
            className="bg-transparent h-[3.5em] py-4 px-[1.125rem] border border-black shadow-[inset_0_0_0_1px_transparent] transition-all text-[#c5cfd9] text-[1rem] leading-[1] rounded-bl-lg rounded-br-lg w-full"
          />
          <button className="flex py-[0.75em] px-[1.25rem] text-[1.125rem] font-semibold justify-center items-center rounded-full bg-[#0052cc] shadow-[inset_0_0_100px_100pz_transparent] transition-all duration-300 text-white text-center tracking-[-0.01rem] leading-[inherit] cursor-pointer w-full mt-8 h-[3rem]">
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-9">
        <h2 className="text-[2.25rem] text-center leading-[1.2] font-bold mobile:text-[1.8rem]">
          “ We write code that writes code ”
        </h2>
        <img className="rounded-full" src="img/sagiv.webp" />
        <p className="text-center text-[1.25rem] leading-[1.2] font-bold">
          Sagiv Ofek, founder and CEO
          <span className="font-normal block">liblab</span>
        </p>
      </div>
    </div>
  );
}

export default ContactSection;
