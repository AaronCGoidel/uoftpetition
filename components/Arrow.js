import React from "react";

const Arrow = (props) => {
  return (
    <div className="flex-center arrow-container">
      <p>{props.text}</p>
      <div className="arrow" />
      <style jsx>{`
        .arrow {
          margin: 0;
          width: 13px;
          height: 13px;

          display: block;

          text-align: center;
          font-size: 20px;
          text-decoration: none;
          text-shadow: 0;

          border-bottom: 2px solid #fff;
          border-right: 2px solid #fff;

          transform: translate(-50%, 0%) rotate(45deg);
          animation: fade_move_down 4s ease-in-out infinite;
        }

        @keyframes fade_move_down {
          0% {
            transform: translate(0, -10px) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(0, 10px) rotate(45deg);
            opacity: 0;
          }
        }

        .arrow-container {
          margin-top: auto;
          cursor: auto;
        }
      `}</style>
    </div>
  );
};

export default Arrow;
