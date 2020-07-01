import React from "react";

const Container = (props) => {
  return (
    <div
      className={`flex-center ${props.dark ? "dark" : ""} ${
        props.thin ? "thin" : ""
      }`}
    >
      <style jsx>{`
        div {
          width: 100vw;
          height: 100vh;

          display: flex;
          flex-direction: column;

          padding: 3rem;
          margin-right: auto;

          overflow-x: auto;
          overflow-y: hidden;
        }

        div:last-child {
          flex: 1;
        }

        .dark {
          background-color: var(--color-main);
          color: #fff;
        }

        .thin {
          height: 50vh;
        }

        @media screen and (max-width: 70rem) {
          div {
            --pad: 1rem;
            height: auto;
          }

          .thin {
            height: auto;
          }
        }
      `}</style>
      {props.children}
    </div>
  );
};

export default Container;
