/// the Components always named as a cameleCase
function Message() {
  const dynamicVariable = "Keiken piscine!";

  // JSX (JavaScript XML)
  // JSX is a syntax extension for JavaScript. It was written
  //  to be used with React. JSX code looks a lot like HTML.

  return (
    <div>
      <div>
        <div className="intro">
          <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
          You can find my thoughts here.
          <br />
          <br />
          <b>
            And <i>pictures</i>
          </b>{" "}
          of scientists! {dynamicVariable}
        </p>
      </div>
    </div>
  );
}

export default Message;
