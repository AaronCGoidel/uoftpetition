import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import React from "react";

const shareMessage =
  "Send an email petition in support of fair fees at UofT during Covid-19.";

const Thanks = () => {
  return (
    <div>
      <h1>Thank You!</h1>
      <h4>
        Your voice is important and we want it heard. Thank you for standing up
        for fair fees at UofT.
      </h4>
      <h4>
        The more people who send a petition, the better. If you would like to
        further support our cause, please consider sharing this site.
      </h4>
      <div className="socials">
        <FacebookShareButton quote={shareMessage} url={"http://fairuoft.com"}>
          {" "}
          <FacebookIcon size={48} round={true} />
        </FacebookShareButton>
        <RedditShareButton url={"http://fairuoft.com"}>
          {" "}
          <RedditIcon size={48} round={true} />
        </RedditShareButton>
        <TwitterShareButton title={shareMessage} url={"http://fairuoft.com"}>
          <TwitterIcon size={48} round={true} />{" "}
        </TwitterShareButton>
        <WhatsappShareButton title={shareMessage} url={"http://fairuoft.com"}>
          {" "}
          <WhatsappIcon size={48} round={true} />
        </WhatsappShareButton>
        {/* <FacebookMessengerShareButton url={"http://fairuoft.com"}>
                  <FacebookMessengerIcon />
                </FacebookMessengerShareButton> */}
      </div>
      <style jsx>{`
        .socials {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  );
};

export default Thanks;
