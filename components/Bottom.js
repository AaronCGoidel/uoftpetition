import React from "react";
import Container from "./Container";
import Button from "./Button";

const Bottom = (props) => {
  return (
    <Container dark thin>
      <h2>Join</h2>
      <h1>{props.num || 0}</h1>
      <h2>Others in petitioning for fair tuition during Covid-19.</h2>
      <Button text={"Send Your Petition"} />
      <style jsx>
        {`
          h1 {
            color: var(--color-light);
          }
        `}
      </style>
    </Container>
  );
};

export default Bottom;
