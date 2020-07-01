import React from "react";
import Container from "./Container";
import Button from "./Button";

const Bottom = (props) => {
  return (
    <Container dark thin>
      <h2>Join</h2>
      <h1>{props.num?.toLocaleString() || 0}</h1>
      <h2>others in petitioning for fair tuition during Covid-19.</h2>
      <Button text={"Send Your Petition"} onClick={props.toggleForm} />
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
