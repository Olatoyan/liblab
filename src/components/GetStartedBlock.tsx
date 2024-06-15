function GetStartedBlock({
  text,
  secText,
}: {
  text: string;
  secText?: string;
}) {
  return (
    <blockquote>
      <div className="get-started-block">
        <p>{text}</p>
        <a href="" className="learn-more">
          Get Started
        </a>
        <p>{secText}</p>
      </div>
    </blockquote>
  );
}

export default GetStartedBlock;
