function NextStep() {
  return (
    <div className="flex flex-wrap gap-5">
      <NextStepBox
        heading="End-to-end SDK generation and publishing with GitHub Actions"
        text=" Automatically generate your SDK every time your API changes using
          GitHub Actions."
      />
      <NextStepBox
        heading="Build a retrieval augmented generation (RAG) AI app using SDKs"
        text="Learn how to add RAG to your apps using Semantic Kernel and C# SDKs."
      />
      <NextStepBox
        heading="Integrate SDK Snippets into your API Reference Documentation using
          Docusaurus"
        text="Learn how to add SDK documentation to an existing Docusaurus
          documentation site."
      />
      <NextStepBox
        heading="Customize your SDK with hooks"
        text="Learn how to customize your SDK with hooks."
      />
      <NextStepBox
        heading="liblab llama SDK challenge 🦙"
        text="Learn how to build an SDK to control a llama in a game."
      />
      {/* <div className="tutorial">
        <h3>End-to-end SDK generation and publishing with GitHub Actions</h3>
        <p>
          Automatically generate your SDK every time your API changes using
          GitHub Actions.
        </p>
        <a href="">Go</a>
      </div> */}
      {/* <div className="tutorial">
        <h3>Build a retrieval augmented generation (RAG) AI app using SDKs</h3>
        <p>
          Learn how to add RAG to your apps using Semantic Kernel and C# SDKs.
        </p>
        <a href="">Go</a>
      </div> */}
      {/* <div className="tutorial">
        <h3>
          Integrate SDK Snippets into your API Reference Documentation using
          Docusaurus
        </h3>
        <p>
          Learn how to add SDK documentation to an existing Docusaurus
          documentation site.
        </p>
        <a href="">Go</a>
      </div> */}
      {/* <div className="tutorial">
        <h3>Customize your SDK with hooks</h3>
        <p>Learn how to customize your SDK with hooks.</p>
        <a href="">Go</a>
      </div> */}
      {/* <div className="tutorial">
        <h3>liblab llama SDK challenge 🦙</h3>
        <p>Learn how to build an SDK to control a llama in a game.</p>
        <a href="">Go</a>
      </div> */}
    </div>
  );
}

function NextStepBox({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="flex flex-col justify-between border border-[#e0e0e080] rounded-[15px] py-3 px-4 max-w-[400px] gap-5">
      <h3 className="text-[#3db4ff] hover:underline">{heading}</h3>
      <p className="text-[15px] mobile:text-[13px]">{text}</p>
      <a
        href=""
        className="inline-block text-[#3db4ff] border border-[#3db4ff] rounded-[5px] text-[20px] py-1 px-12 font-bold transition-all duration-200 text-center hover:text-black hover:bg-[#3db4ff]"
      >
        Go
      </a>
    </div>
  );
}

export default NextStep;
