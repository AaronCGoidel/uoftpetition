import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>This site is not affiliated with the University of Toronto</p>
      <style jsx>
        {`
          footer {
            width: 100%;
            background-color: var(--color-dark);

            color: #fff;
            font-size: 12px;

            padding: 0 1rem;

            overflow: auto;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
