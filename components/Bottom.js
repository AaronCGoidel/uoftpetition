import React from "react";
import Container from "./Container";
import Button from "./Button";

const Bottom = (props) => {
  return (
    <Container dark thin>
      <h2>Join</h2>
      <h1>{props.num?.toLocaleString() || 0}</h1>
      <h2>
        others in petitioning for fair tuition during <nobr>Covid-19.</nobr>
      </h2>
      <Button text={"Send Your Petition"} onClick={props.toggleForm} />
      <style jsx>
        {`
          h1 {
            font-size: 2.66em;
            color: var(--color-light);
            margin: 0;
          }

          h2 {
            font-size: 2em;
            margin-bottom: 2.2rem;
            max-width: 35rem;
          }
        `}
      </style>
    </Container>
  );
};

export default Bottom;
