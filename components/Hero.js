import React, { Component } from "react";
import Arrow from "./Arrow";
import Button from "./Button";
import Container from "./Container";

const Hero = (props) => {
  return (
    <Container dark>
      <img src={"./UofT_Centered.svg"} width="290" />
      <h1>Put splash text here...</h1>
      <Button text={"Send Email"} />
      <Arrow text={"Learn More"} />
      <style jsx>
        {`
          .hero {
            background-color: var(--color-main);
            color: #fff;
          }

          h1 {
            text-align: center;
          }
        `}
      </style>
    </Container>
  );
};

export default Hero;
