import React, { Component } from "react";
import Arrow from "./Arrow";
import Button from "./Button";
import Container from "./Container";

const Hero = (props) => {
  return (
    <Container dark>
      <img
        src={"./UofT_Centered.svg"}
        width="290"
        alt="University of Toronto"
      />
      <div className="call-to flex-center">
        <h1>Online learning should not be as expensive as in-person.</h1>
        <h2>Stand up for fair fees during Covid-19.</h2>
        <Button text={"Send Email"} onClick={props.toggleForm} />
      </div>
      <Arrow text={"Learn More"} />
      <style jsx>
        {`
          .hero {
            background-color: var(--color-main);
            color: #fff;
          }

          .call-to {
            margin-top: auto;
          }
        `}
      </style>
    </Container>
  );
};

export default Hero;
