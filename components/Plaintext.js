import React from "react";

const Plaintext = (props) => {
  return (
    <div>
      <h1>Send this email to make a difference.</h1>
      <p>
        <span>To</span>
        {props.email.to}
      </p>
      <p>
        <span>Subject</span>
        {props.email.subject}
      </p>
      <p>
        <span>Body</span>
        <br></br>
        {props.email.body}
      </p>
      <style jsx>{`
        span {
          font-weight: bold;
        }
        span::after {
          content: ": ";
        }

        p {
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

export default Plaintext;
