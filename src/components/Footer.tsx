function Footer() {
  return (
    <footer className="bg-[#1c1e21] p-8 flex justify-evenly tablet:grid tablet:grid-cols-2 tablet:gap-12">
      <a href="" className="tablet:col-span-full tablet:pb-4">
        © 2024 - liblab INC.
      </a>

      <ul>
        <h3 className="text-[#c5cfd9] text-[0.625rem] font-bold uppercase leading-[1.2]">
          Follow
        </h3>
        {["Discord", "GitHub", "Twitter"].map((item) => (
          <li key={item} className="text-[#92a0af] text-[1.1rem]">
            {item}
          </li>
        ))}
      </ul>
      <ul>
        <h3 className="text-[#c5cfd9] text-[0.625rem] font-bold uppercase leading-[1.2]">
          Product
        </h3>
        {["Documentation", "Pricing", "Blog"].map((item) => (
          <li key={item} className="text-[#92a0af] text-[1.1rem]">
            {item}
          </li>
        ))}
      </ul>
      <ul>
        <h3 className="text-[#c5cfd9] text-[0.625rem] font-bold uppercase leading-[1.2]">
          Company
        </h3>
        {["About us", "Careers", "Contact"].map((item) => (
          <li key={item} className="text-[#92a0af] text-[1.1rem]">
            {item}
          </li>
        ))}
      </ul>
      <ul>
        <h3 className="text-[#c5cfd9] text-[0.625rem] font-bold uppercase leading-[1.2]">
          Legal
        </h3>
        {["Privacy policy", "Terms of Use"].map((item) => (
          <li key={item} className="text-[#92a0af] text-[1.1rem]">
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
